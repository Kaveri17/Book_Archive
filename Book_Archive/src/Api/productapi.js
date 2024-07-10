export const checkoutProducts = async (products) => {
    try {
        return await axios.post(`${process.env.VITE_BACKEND_URL}/payment/create-checkout-session`, { products });
    } catch (err) {
        console.log(err)
    }
}