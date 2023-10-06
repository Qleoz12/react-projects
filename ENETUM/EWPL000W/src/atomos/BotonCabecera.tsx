import { FC } from "react"
import {Button} from 'primereact/button'
import { useTranslation } from "react-i18next";


export interface IBotones {
    mostrarBotonTributario: boolean;
    mostrarBotonCiudadania: boolean;
}

 {//TODO: ADD ONCLICK & 
 }

  function redirigirCiudadania () {
    window.location.href = import.meta.env.VITE_APP_CIUDADANIA
  }

  function redirigirProfesional () {
    window.location.href = import.meta.env.VITE_APP_PROFESIONAL

  }
export const BotonCabecera:FC<IBotones> = (mostrarBotonTributario,mostrarBotonCiudadania) => {
    const { t } = useTranslation();

    if(mostrarBotonTributario && !mostrarBotonCiudadania){
        return(

           
            <Button onClick = {redirigirProfesional} className="sedeBtnTurquesa sedeCambioPortal btn-secondary" ><span>{t("textoPortal")}</span><span>{t("profesionalTributario")}</span></Button>
          
        )
    }
    if(!mostrarBotonTributario && mostrarBotonCiudadania){
        return(
            <Button  onClick = {redirigirCiudadania}  className="sedeBtnRojo sedeCambioPortal btn-secondary" ><span>{t("textoPortal")}</span><span>{t("ciudadania")}</span> </Button>
        )
    }
    else return (
        <Button  onClick = {redirigirProfesional} className="sedeBtnTurquesa sedeCambioPortal btn-secondary" ><span>{t("textoPortal")}</span><span>{t("profesionalTributario")}</span></Button>						
								
    )

}