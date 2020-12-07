import axios from "axios";

const API_URL = "http://localhost:4000/user/";

export const fetchUser = async (username) => {
  console.log(username);
  return await axios.get(API_URL + username);
};

export const fetchUsers = async () => {
  return await axios.get(API_URL);
};
