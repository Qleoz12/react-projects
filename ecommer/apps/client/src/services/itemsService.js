import axios from "axios";

const baseUrl = "/tcpc-items";

export const getItems = async () => {
  //pruebA@gmail.com
  //123456
  return await axios.get(`${baseUrl}`);
};


export const getItemsbyCategory = async (id) => {
  //pruebA@gmail.com
  //123456
  return await axios.get(`${baseUrl}/category/${id}`);
};
