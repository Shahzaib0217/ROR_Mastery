import { Link } from "react-router-dom";
import { registerApi, loginApi } from "../apis/authentication";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { validateEmail, validatePassword } from "../utilities/validations";
import PropTypes from "prop-types";
import Button from "../elements/Button";

const Authentication = ({ pageType = PageType.LOGIN }) => {
  const initialErrorsState = {
    email: "",
    password: "",
    api: "",
  };

  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["jwt"]);

  // if the user is already logged in redirect to the home page
  useEffect(() => {
    if (cookies.jwt) {
      navigate("/");
    }
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(initialErrorsState);

  /*React's useState hook provides a "setter" function (e.g., setEmail, setPassword) to update the state value.
    By passing the specific state setter (setEmail or setPassword) into handleInputChange, you create a reusable function that works for multiple inputs. */
  const handleInputChange = (setter) => (e) => setter(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!validateEmail(email)) {
      newErrors.email = "Invalid email address";
    }
    if (!validatePassword(password)) {
      newErrors.password = "Password must be at least 6 characters long";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const apiCall = pageType === PageType.LOGIN ? loginApi : registerApi;

    try {
      const [response, apiError] = await apiCall({
        user: { email, password },
      });

      if (apiError) {
        setErrors((prevErrors) => ({ ...prevErrors, api: apiError }));
        return;
      }

      const { data, jwtToken } = response;
      setCookie("jwt", jwtToken);
      navigate("/");
    } catch (err) {
      console.error("Unexpected error:", err);
      setErrors((prevErrors) => ({
        ...prevErrors,
        api: "An unexpected error occurred. Please try again later.",
      }));
    }
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-12">
        <h2>{pageType === PageType.LOGIN ? "Login" : "Register"}</h2>
        {pageType === PageType.LOGIN ? (
          <p>
            Not a user?
            <Link to="/register" className="ms-1 underline text-blue-500">
              Register
            </Link>
          </p>
        ) : (
          <p>
            Already a user?
            <Link to="/login" className="ms-1 underline text-blue-500">
              Login
            </Link>
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="mt-10 max-w-96 flex flex-col gap-4"
        >
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={email}
              className="py-2 border border-gray-600 rounded px-3 w-full"
              onChange={handleInputChange(setEmail)}
            />
            {errors.email && (
              <p className="text-sm text-medium text-red-500 mt-1">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={password}
              className="py-2 border border-gray-600 rounded px-3 w-full"
              onChange={handleInputChange(setPassword)}
            />
            {errors.password && (
              <p className="text-sm text-medium text-red-500 mt-1">
                {errors.password}
              </p>
            )}
          </div>

          <Button onClick={handleSubmit}>
            {pageType === PageType.LOGIN ? "Login" : "Register"}
          </Button>

          {errors.api && (
            <p className="text-sm text-medium text-red-500 mt-1">
              {errors.api}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export const PageType = Object.freeze({
  LOGIN: 0,
  REGISTER: 1,
});

Authentication.propTypes = {
  pageType: PropTypes.number.isRequired,
};

export default Authentication;
