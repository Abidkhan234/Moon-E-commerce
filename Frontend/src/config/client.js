import axios from "axios";
import { getItem, setItem } from "../utils/localStorageHelper";

// Create Axios instance
const Axios = axios.create({
    baseURL: import.meta.env.VITE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Request interceptor (attach accessToken if available)
Axios.interceptors.request.use(
    (config) => {
        const accessToken = getItem("accessToken");
        const refreshToken = getItem("refreshToken");

        if (accessToken) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
        }

        config.meta = { refreshToken };
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor (handle token expiry)
Axios.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // If token expired and refresh not tried yet
        if (
            error.response &&
            error.response.status === 401 &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;

            const refreshToken = originalRequest.meta?.refreshToken;

            if (!refreshToken) {
                return Promise.reject(error); // No refresh token
            }

            try {
                // Call refresh API
                const { data } = await axios.post(
                    `${import.meta.env.VITE_URL}/auth/refresh-token`,
                    { refreshToken }
                );

                const newAccessToken = data.accessToken;


                setItem("accessToken", newAccessToken);


                // Update Axios default headers
                Axios.defaults.headers.common["Authorization"] = `Bearer ${newAccessToken}`;

                // Retry original request with new token
                originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
                return Axios(originalRequest);
            } catch (refreshError) {
                console.error("Refresh token expired:", refreshError);

                // Clear tokens on failure
                setItem("accessToken", "");
                setItem("refreshToken", "");
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default Axios;
