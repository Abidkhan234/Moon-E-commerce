import axios from "axios";

// Create instance
const Axios = axios.create({
    baseURL: import.meta.env.VITE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});



export default Axios;