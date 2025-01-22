import React from "react";
import { useCookies } from "react-cookie";
import { logoutApi } from "../apis/authentication";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    navigate("/login");
  };

  const handleLogout = async (e) => {
    const [result, error] = await logoutApi(cookies.jwt);
    if (error) {
      removeCookie("jwt");
    } else {
      removeCookie("jwt");
    }
  };

  return (
    <nav class="bg-white border-gray-200 dark:bg-gray-900 shadow">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <p class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Code Challenges
        </p>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div>
            {cookies.jwt ? (
              <button
                onClick={handleLogout}
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                LogOut
              </button>
            ) : (
              <button
                onClick={handleLogin}
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                LogIn
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
