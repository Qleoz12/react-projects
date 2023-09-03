import axios from "axios";
import {TcprOrderGeneralDto} from "../dtos/OrdenGeneral.dto"
const baseUrl = "/tcpr-order-general";



export const saveOrdenGeneral = async (orden) => {

    return axios.post(`${baseUrl}`,orden);
};

export const getItemsCategoriesByListPrice = async (currentPositionUser) => {
    
    return await axios.post(`/tcp-sps`,currentPositionUser);
  };

  export const creaidordengeneral = async (client) => {

    return axios.post(`/tcp-sps/creaidordengeneral`, client);
};