import axios from "axios";

const baseUrl = "/tcpc-items-categories";

export const getItemsCategories = async () => {
  //pruebA@gmail.com
  //123456
  return await axios.get(`${baseUrl}`);
};
