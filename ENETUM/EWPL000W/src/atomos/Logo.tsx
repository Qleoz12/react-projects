import { t } from "i18next"
import { FC } from "react"

export const Logo:FC = (  ) => {
    //TODO:Poner Rutas relativas
    return (
        <h2 className="sedeLogo">
            <img src="https://appstac.desebizkaia.bfa/EW9NCSSE/irudiak/sedeLogoApaisado.svg" alt={t("textoLogo")}/>
        </h2>


    )
}