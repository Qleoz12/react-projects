import axios from "axios";
import {
    TcprOrderGeneralDto
} from "../dtos/OrdenGeneral.dto"
const baseUrl = "/tcpr-client";



export const saveClient = async (client) => {

    return axios.post(`${baseUrl}`, client);
};