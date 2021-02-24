import axios from "axios";

const BASE_URL = process.env.VUE_APP_API_URL;

export const authUser = async (userObj) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/auth/`, userObj);
    return data;
  } catch (error) {
    return error;
  }
};

export const registerUser = async (userObj) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/register/`, userObj);
    return data;
  } catch (error) {
    return error;
  }
};

export const getProducts = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/products/`);
    return data;
  } catch (error) {
    return error;
  }
};
export const getProductById = async (id) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/products/${id}`);
    return data;
  } catch (error) {
    return error;
  }
};
export const makeOrder = async (order, token) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/orders`, order, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};
export const getUserOrders = async (token) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/orders`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    return error.message;
  }
};
export const getUserProfile = async (token) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    return error.message;
  }
};
export const patchUserProfile = async (userObj, token) => {
  try {
    const { data } = await axios.patch(`${BASE_URL}/me`, userObj, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    return error.message;
  }
};
