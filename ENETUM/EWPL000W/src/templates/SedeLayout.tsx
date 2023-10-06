import { FC, useEffect, useState } from "react";
import { Cabecera, Pie, Menu } from ".."
import { fetchSecured } from "../helpers/services/http";
import { IData } from "../organismos";
import { authConfig, initAuthServices } from "../helpers/initAuthServices";
import { stringUTCaStringFechaES } from "../helpers/parsers";
import { POSICION, fetchMenu, getRol } from "../helpers";
import { useTranslation } from "react-i18next";
import { MenuGroup } from "../helpers"; 
import { toPosicion } from "../helpers/menu";

interface iProps {
  children: any;
  setDatosVuelta?: Function;
  confSeguridad?: authConfig | undefined;
  bearer: string;
}

export const authManagerConfig = (authConfig: authConfig) => {
  return initAuthServices(authConfig)
}

const SedeLayout: FC<iProps> = ({ children, setDatosVuelta, confSeguridad, bearer }: iProps) => {

  const authService = confSeguridad && authManagerConfig(confSeguridad);
  const [data, setData] = useState<IData>({
    "apellidos": "",
    "razonSocial": "",
    "saludo": "",
    "fechaInicioSesion": "",
    "botones": {
      "mostrarBotonProfesional": false,
      "mostrarBotonCiudadania": false,
      "redirigirErrorControlado": false,
      "mostrarMisDatosColaboradorSocial": false,
      "mostrarMisDatos": false
    },
    "llamadaCorrecta": false,
    "agurra": "",
    "nombreCompleto": "",
    "nombre": "",
    "usuarioPresentador": null
  })
  const [menus, setMenus] = useState<MenuGroup[] | any[]>([]);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (authService && authService.isAuthenticated()) {
      fetchSecured(import.meta.env.VITE_APP_PU + 'false', "get", bearer)
        .then(response => {
          response.fechaInicioSesion = stringUTCaStringFechaES(response.fechaInicioSesion)
          console.log("RESULTADO ========> ", stringUTCaStringFechaES(response.fechaInicioSesion))
          console.log(response.fechaInicioSesion)
          console.log("Response======>", response)
          setData(response)
          setDatosVuelta && setDatosVuelta(response)
        })
        .catch((error) => (console.log("Error ", error)))
    }
  }, [])

  useEffect(() => {
    fetchMenu(getRol())
      .then(response => {
        setMenus(response);
      })
      .catch((error) => (console.log("Error ", error)))
  }, []);

  i18n.on('languageChanged', function(language) {
    menus?.forEach((element: MenuGroup) => {
      element.label = language == 'eu' ? element.labelEuskera : element.labelCastellano;
      element.url = language == 'eu' ? element.urlEuskera : element.urlCastellano;
      element?.menuItem?.forEach((element2: MenuGroup) => {
        element2.label = language == 'eu' ? element2.labelEuskera : element2.labelCastellano;
        element2.url = language == 'eu' ? element2.urlEuskera : element2.urlCastellano;
      });
    });
  });
  
  return (
    <>
      <Cabecera data={data} />
      <Menu menus={toPosicion(menus, POSICION.CABECERA)}></Menu>
      {children}
      <Pie menus={toPosicion(menus, POSICION.PIE)} />
    </>
  )
}

export default SedeLayout