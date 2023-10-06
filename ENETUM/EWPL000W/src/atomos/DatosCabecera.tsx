import { t } from "i18next";
import { FC } from "react";

export interface IBotonesCabecera{
    mostrarBotonProfesional: boolean;
    mostrarBotonCiudadania: boolean;
    redirigirErrorControlado: boolean;
    mostrarMisDatosColaboradorSocial: boolean;
    mostrarMisDatos: boolean;
}

export interface IData {
    apellidos: string;
    razonSocial: string;
    saludo: string;
    fechaInicioSesion: string;
    botones: IBotonesCabecera;
    llamadaCorrecta: boolean;
    agurra: string;
    nombreCompleto: string;
    nombre: string;
    usuarioPresentador: any;
}
export const DatosCabecera:FC<IData> = ( data ) => {
    return (
        <div className="sedeUsuario sedeNivel1 sedeActuando" aria-hidden="true">
            <div className="textoNombres">
                {
                   
                    <p>{data.nombreCompleto}</p>
                }
                { data.razonSocial && <p>{t("textoActuando")}  {data.razonSocial}</p>}
            </div>
        </div>
    )
}