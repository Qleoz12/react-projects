import { MenuGroup } from 'ewpl000w';
import { Card } from 'primereact/card';
import { FC } from 'react';

interface IEnlaceProps {
  menus: MenuGroup[];
}

export const Enlace: FC<IEnlaceProps> = (props) => {
  const { menus } = props;
  const menuLi = menus.map((item: MenuGroup, index) => (
    <li key={index}>      
      {
        // esta condicion esta puesta para que los estilos de guida se vean bien pero con otros estilos se podria quitar
        
        item.url ? 
          <a href={item.url}>{item.label}</a>  
        :
          <span>{item.label}</span>
        
      }
      {
        // esta condicion esta puesta para que los estilos de guida se vean bien pero con otros estilos se podria quitar
        item.menuItem?.length && item.menuItem?.length > 0 && 
            <ul>
            {item.menuItem?.map((subItem: MenuGroup, subIndex: any) => (
              <li key={subIndex}>
                <a href={subItem.url}>{subItem.label}</a>
              </li>
            ))}
          </ul>
      }
    </li>
  ));

  return (
    <Card>
      <ul className="sedeMapaWeb">
        {menuLi}
      </ul>
    </Card>
  )
}


export type { MenuGroup }