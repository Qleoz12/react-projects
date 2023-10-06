import axios from "axios";

import { ROL } from "ewpl000w";

const baseUrl = import.meta.env.VITE_APP_NOTICES_ENDPOINT

interface GetNoticesOptions {
    profile: ROL; 
}

export const getNotices = async ({profile}: GetNoticesOptions) => {
    // return new Promise(resolve => {
    //     setTimeout(() => {
    //       const response = {
    //         data: [{
    //           "codigoUsuarioModificacion": "AG03A   ",
    //           "descripcionEs": "aviso1                                                                                                                                                                                                                                                         ",
    //           "descripcionEu": "eu_aviso1                                                                                                                                                                                                                                                      ",
    //           "fechaAlta": "2023-08-31T12:59:42.345Z[UTC]",
    //           "fechaBaja": "9999-12-31T22:59:59.999Z[UTC]",
    //           "fechaFinVigencia": "2024-08-09T22:00:00Z[UTC]",
    //           "fechaFinVigenciaString": "10/08/2024",
    //           "fechaInicioVigencia": "2023-08-20T22:00:00Z[UTC]",
    //           "fechaInicioVigenciaString": "21/08/2023",
    //           "idAviso": 8,
    //           "idAvisoExterno": 1002,
    //           "perfil": "C",
    //           "tipoEnlace": "M",
    //           "tituloEs": "tituloprueba1modif                                                                                                                                                                                                                                             ",
    //           "tituloEu": "eu_tituloprueba1modif                                                                                                                                                                                                                                          "
    //        },
    //        {
    //         "codigoUsuarioModificacion": "AG03A   ",
    //         "descripcionEs": "",
    //         "descripcionEu": "",
    //         "fechaAlta": "2023-08-31T12:59:42.345Z[UTC]",
    //         "fechaBaja": "9999-12-31T22:59:59.999Z[UTC]",
    //         "fechaFinVigencia": "2024-08-09T22:00:00Z[UTC]",
    //         "fechaFinVigenciaString": "10/08/2024",
    //         "fechaInicioVigencia": "2023-08-20T22:00:00Z[UTC]",
    //         "fechaInicioVigenciaString": "21/08/2023",
    //         "idAviso": 8,
    //         "idAvisoExterno": 1002,
    //         "perfil": "C",
    //         "tipoEnlace": "M",
    //         "tituloEs": "tituloprueba1modif sindes                                                                                                                                                                                                                                            ",
    //         "tituloEu": "eu_tituloprueba1modif sindes                                                                                                                                                                                                                                         "
    //      }]
    //       };
    //       resolve(response);
    //     }, 1000); // Simulating a delay of 1 second
    //   });
    return axios.get(`${baseUrl}${profile}`);
};