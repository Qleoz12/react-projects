import axios from "axios";

const baseUrl = "/tcpc-items-categories";

export const getItemsCategories = async (listPrice) => {
  if(listPrice){
    return await axios.get(`${baseUrl}/${listPrice}`);  
  }
  return await axios.get(`${baseUrl}`);
};

export const getItemsCategoriesByListPrice = async (currentPositionUser) => {
  //pruebA@gmail.com
  //123456
  return await axios.post(`/tcp-sps`,currentPositionUser);
};


export const getToppings = async (currentItem) => {

  return await axios.post(`/tcp-sps/toppings`,currentItem);
};

