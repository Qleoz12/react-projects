import axios from "axios";

const baseUrl = "/tcpc-vias";


export const getVias = async (id) => {
  return await axios.get(`${baseUrl}`);
};
