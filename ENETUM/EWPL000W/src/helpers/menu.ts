import { ROL, i18n } from ".."

interface MenuGroup {
  menuItem?: MenuGroup[]
  id?: number
  labelCastellano: string
  labelEuskera: string
  label?: string
  urlCastellano: string
  urlEuskera: string
  url?: string
  titleCastellano?: string
  titleEuskera?: string
  subMenu?: number
  abreNuevaPestana?: string
  muestraOpcion?: string
}

enum POSICION {
  CABECERA = 'C', PIE = 'P', AMBOS = 'A'
}

const toPosicion = (menus: MenuGroup[], posicion: POSICION): MenuGroup[] => {
  let result:MenuGroup[] = [];
  Object.assign(result, menus);
  
  
  result?.forEach((element: MenuGroup, index: any) => {
    if (POSICION.AMBOS != element.muestraOpcion && posicion == element.muestraOpcion) {
      result.splice(index, 1);
    }
  });
  
  return result;
}

const fetchMenu = async (rol: ROL): Promise<MenuGroup[]> => {
  const VITE_APP_DOMINIO_APPS_ALDUNDIA_BFA = import.meta.env.VITE_APP_DOMINIO_APPS_ALDUNDIA_BFA
  const { t } = i18n;
  const response = await fetch(t('endpoint.menu', { dominio: VITE_APP_DOMINIO_APPS_ALDUNDIA_BFA, rol: ROL.CIUDADANO === rol }));

  if (!response.ok) {
    throw await response.json()
  }

  return response.json()
    .then(response => {      
      const lang = i18n.language;
      let menus: MenuGroup[] = response.menuGroup;
      
      menus?.forEach((element: MenuGroup) => {
        element.label = lang == 'eu' ? element.labelEuskera : element.labelCastellano;
        element.url = lang == 'eu' ? element.urlEuskera : element.urlCastellano;
        element?.menuItem?.forEach((element2: MenuGroup) => {
          element2.label = lang == 'eu' ? element2.labelEuskera : element2.labelCastellano;
          element2.url = lang == 'eu' ? element2.urlEuskera : element2.urlCastellano;
        });
      });

      return menus;
    });
}

export { fetchMenu, toPosicion, POSICION }
export type { MenuGroup }