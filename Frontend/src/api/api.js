import axios from "axios";

const fetchProducts = async (id, query) => {
    try {
        if (id || query) {
            const { data } = await axios.get(`${import.meta.env.VITE_PRODUCT_URL}/${id ? id : query}`);

            return data
        }

        const { data } = await axios.get(`${import.meta.env.VITE_PRODUCT_URL}`);

        return data
    } catch (error) {
        console.log(error);
        return error
    }
}

export { fetchProducts }