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
