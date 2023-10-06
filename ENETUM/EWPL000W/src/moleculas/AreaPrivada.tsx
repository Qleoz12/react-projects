import { FC } from "react";
import { IData } from "../organismos/Cabecera";
import { Button } from "primereact/button";
import { SplitButton } from 'primereact/splitbutton';
import { useTranslation } from "react-i18next";
import i18n from "../i18n/i18n";
import { MenuItem } from "primereact/menuitem";

export const AreaPrivada: FC<IData> = (data) => {
    const { t } = useTranslation();

    let nombreAreaPrivada = data.nombreCompleto
    if (data.razonSocial) { nombreAreaPrivada = data.usuarioPresentador.nombreCompleto }
    const redirigirContacto = () => {

        window.location.href = import.meta.env.VITE_APP_CONTACTO
    }

    const onClickLanguageChange = (e: string) => {
        const language = e;
        i18n.changeLanguage(language); //change the language
    }
    /*
    const opcionesIdioma = [
        {
            label: "idioma Actual",
        },
        {
            label: t("idiomaOtro"),
        },]
        */
    const save = () => {
        i18n.changeLanguage("es" == i18n.language ? "eu" : "es");
    }
    const opcionesIdioma: MenuItem[] = [
        {
            label: 'ES',
            command: () => {
                onClickLanguageChange('es')
            }
        },
        {
            label: 'EU',
            command: () => {
                onClickLanguageChange('eu')
            }
        },]
    let opcionesUsuario: MenuItem[] = [{}]

    if (data.razonSocial) {
        opcionesUsuario = [
            {
                label: t("textoActuando") + data.razonSocial
            },
            {
                label: t("ultimaConexion") + ": " + data.fechaInicioSesion,
            },
            {
                label: t("salir"),
                command: () => {
                    window.location.href = import.meta.env.VITE_APP_PU
                }
            },
        ]
    } else {
        opcionesUsuario = [

            {
                label: t("ultimaConexion") + ": " + data.fechaInicioSesion,
                command: () => {
                }
            },
            {
                label: t("salir"),
                command: () => {
                    onClickLanguageChange('es')
                }
            },]
    }
    //const mostrarCerrarSesion = () => { console.log("cerrando sesion")};
    return (
        <div className="sedeOpcionesCabecera">
            <Button label={t("contacto")} link onClick={redirigirContacto} className="sedeContacto" />
            <div className="sedeIdioma">
                <SplitButton label={t("idioma")} text onClick={save} model={opcionesIdioma} menuClassName="desplegableIdioma" />
            </div>
            <SplitButton label={nombreAreaPrivada} text model={opcionesUsuario} menuClassName="desplegableUsuario" />
        </div>
    )
}
