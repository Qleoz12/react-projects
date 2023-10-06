// import axios from "axios";

import { fetchSecuredGeneric } from "./http";

const baseUrl = import.meta.env.VITE_APP_FAV_ENDPOINT

export const getFavorites=(idPersona: string, idPersonaActuante:string) =>
fetchSecuredGeneric(baseUrl, "get",{idPersona:idPersona,idPersonaActuante:idPersonaActuante});