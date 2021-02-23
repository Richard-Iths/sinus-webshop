import axios from "axios";

const BASE_URL = process.env.VUE_APP_API_URL;

export const authUser = async (userObj) => {
  try {
    const user = await axios.post(`${BASE_URL}/auth/`, userObj);
    return user.data;
  } catch (error) {
    return error;
  }
};

export const registerUser = async (userObj) => {
  try {
    const user = await axios.post(`${BASE_URL}/register/`, userObj);
    return user.data;
  } catch (error) {
    return error;
  }
};

export const getProducts = async () => {
  try {
    const products = await axios.get(`${BASE_URL}/products/`);
    return products.data;
  } catch (error) {
    return error;
  }
};
export const getProductById = async (id) => {
  try {
    const products = await axios.get(`${BASE_URL}/products/${id}`);
    return products.data;
  } catch (error) {
    return error;
  }
};
export const makeOrder = async (order,token) => {
  try {
    const orders = await axios.post(`${BASE_URL}/orders/`, order,{
      headers: {
        "authorization": `bearer ${token}`
      }
    }), 
    return orders.data;
  } catch (error) {
    return error;
  }
};
export const getUserOrders = async (token) => {
  try {
    const userOrders = await axios.post(`${BASE_URL}/orders/`,{
      headers:
      {
      "authorization": `bearer ${token}`
    }
  })
  return userOrders;
  } catch (error) {
    return error;
  }
} 
