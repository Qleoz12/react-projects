import axios from "axios";

const baseUrl = "/tcpc-login-users";
export const postLoginUser = async ({ user }) => {
  //pruebA@gmail.com
  //123456
  return await axios.post(`${baseUrl}/login`, user);
};
export const getUser = async () => {
  //pruebA@gmail.com
  //123456
  return await axios.get(`${baseUrl}/user`);
};
