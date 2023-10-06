import { FC } from "react";
import { Logo } from "../atomos/Logo";
import { BotonCabecera } from "../atomos/BotonCabecera";
import { AreaPrivada } from "../moleculas/AreaPrivada";

export interface IProps {
    data: IData;
    //actuaComoColaborador: boolean;
}

export interface IBotonesCabecera {
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

export const Cabecera: FC<IProps> = ({ data },) => {
    return (
        <header className="sedeCabecera ">
            <Logo />
            <BotonCabecera {...data}
                mostrarBotonTributario={data.botones.mostrarBotonProfesional}
                mostrarBotonCiudadania={data.botones.mostrarBotonCiudadania} />
            <AreaPrivada {...data}></AreaPrivada>
        </header>

    )
}