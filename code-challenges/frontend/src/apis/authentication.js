import { DOMAIN } from './config';

export const registerApi = async (bodyObject) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyObject),
    };

    try {
        const response = await fetch(`${DOMAIN}/users`, requestOptions);

        // Handle success response
        if (response.ok) {
            const jwtToken = response.headers.get("Authorization") || response.headers.get("authorization");
            const data = await response.json();
            return [{ data, jwtToken }, ''];
        }

        // Specific error cases
        if (response.status === 422) {
            return ['', 'User already exists'];
        }

        // Fallback for other status codes
        const errorMessage = await response.text();
        return ['', `Error (${response.status}): ${errorMessage || 'Unknown error occurred'}`];
    } catch (error) {
        console.error('Error:', error);
        return ['', `Server down: ${error.message || 'Network error occurred'}`];
    }
};

export const loginApi = async (bodyObject) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyObject),
    };

    try {
        const response = await fetch(`${DOMAIN}/users/sign_in`, requestOptions);

        // Handle success response
        if (response.ok) {
            const jwtToken = response.headers.get("Authorization");
            const data = await response.json();
            return [{ data, jwtToken }, ''];
        }

        // Specific error cases
        if (response.status === 401) {
            return ['', 'Invalid username or password'];
        }

        // Fallback for other status codes
        const errorMessage = await response.text();
        return ['', `Error (${response.status}): ${errorMessage || 'Unknown error occurred'}`];
    } catch (error) {
        console.error('Error:', error);
        return ['', `Server down: ${error.message || 'Network error occurred'}`];
    }
};

export const logoutApi = async (jwtToken) => {
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': jwtToken
        },
    };

    try {
        const response = await fetch(`${DOMAIN}/users/sign_out`, requestOptions);

        // Handle success response
        if (response.ok) {
            const jwtToken = response.headers.get("Authorization");
            const data = await response.json();
            return [{ data, jwtToken }, ''];
        }

        // Specific error cases
        if (response.status === 401) {
            return ['', 'Invalid username or password'];
        }

        // Fallback for other status codes
        const errorMessage = await response.text();
        return ['', `Error (${response.status}): ${errorMessage || 'Unknown error occurred'}`];
    } catch (error) {
        console.error('Error:', error);
        return ['', `Server down: ${error.message || 'Network error occurred'}`];
    }
};
