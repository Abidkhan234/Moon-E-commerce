import Axios from '../config/client'

const fetchBestProducts = async () => {
    try {
        const { data } = await Axios.get("/product?sortBy=high&limit=4");

        return data.products
    } catch (error) {
        console.log(error);
        return error
    }
}

const fetchNewProducts = async () => {
    try {
        const { data } = await Axios.get("/product?sortBy=latest&limit=4");
        return data.products
    } catch (error) {
        console.log(error);
        return error
    }
}

const fetchSingleProduct = async (id) => {
    try {
        const { data } = await Axios.get(`/product/single-product/${id}`);
        return data
    } catch (error) {
        console.log(error);
        return error
    }
}

const shopProducts = async (filterData = {}, sortBy = "") => {
    try {
        let query = "";

        // Sorting
        if (sortBy) {
            query += `sortBy=${sortBy}&`;
        }

        // Filters
        if (filterData.brand) {
            if (Array.isArray(filterData.brand)) {
                // join brands with &
                filterData.brand.forEach((b) => {
                    query += `brand=${b}&`;
                });
            } else {
                query += `brand=${filterData.brand}&`;
            }
        }

        if (filterData.category) {
            query += `category=${filterData.category}&`;
        }

        if (filterData.page) {
            query += `page=${filterData.page}&`;
        }

        query = query.endsWith("&") ? query.slice(0, -1) : query;

        const { data } = await Axios.get(`/product?limit=6${query ? `&${query}` : ""}`);

        return data;
    } catch (error) {
        console.error("shopProducts error:", error);
        throw error;
    }
};

const fetchCategories = async (find) => {
    try {

        const { data } = await Axios.get(`/product/search/${find}`);

        return data.products
    } catch (error) {
        console.log(error);
        return error
    }
}

const fetchCartProducts = async () => {
    try {

        const { data } = await Axios.get("/order/get-order");

    } catch (error) {
        console.log(error);
        throw error
    }
}

const addOrder = async (prodcutId, quantity) => {
    try {

        const { data } = await Axios.post("/order/add-order", {
            productDetails: [
                { id: prodcutId }
            ]
        });

        return data
    } catch (error) {
        console.log(error);
        throw error
    }
}

const getOrders = async () => {
    try {
        const { data } = await Axios.get("/order/get-orders");

        return data.products
    } catch (error) {
        console.log(error);
        throw error
    }
}

export { fetchBestProducts, fetchNewProducts, fetchSingleProduct, shopProducts, fetchCategories, fetchCartProducts, addOrder, getOrders }