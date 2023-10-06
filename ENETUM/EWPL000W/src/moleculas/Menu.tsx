import { FC } from "react"
import { Menubar } from 'primereact/menubar';
import { t } from "i18next";
import { MenuGroup } from "..";
import { MenuItem } from "primereact/menuitem";

export interface IMenuData {
	menus: MenuGroup[];
}

export const Menu:FC<IMenuData> = ({menus}) => {
    
    function toPrime(value: MenuGroup): MenuItem {
        let result:MenuItem = {};
        
        result.label = value.label;
        result.url = value.url;
        result.items = value.menuItem?.map(toPrime);

        return result;
    }

    // m.push({url:'http://test.test', icon: 'sedeMenuPpalIzq sedeAvisosNoConectado', label: 'test'})
    return(
        <nav className="sedeMenuPpal">
            <a href="http://argitalpenak.lantik.bizkaia.bfa/Egoitza%20Elektronikoa/Demo/index.html" className="sedeBtnRojo">{t("menuCiudadania")}</a>
            <Menubar model={menus.map(toPrime)}></Menubar>
        </nav>
    )
}