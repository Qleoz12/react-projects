import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Badge } from 'primereact/badge';
import { FC } from 'react';


interface IProps {
    favoritos:number
}

export const  Favoritos:FC<IProps> = (favoritos) => {
    let resultado = 0
    favoritos? resultado = favoritos.favoritos : resultado= resultado

    return (
        
        <Card className='sedeContenidoFondoBlanco w-50'>
            <i className="pi pi-star " >FAVORITOS</i>
            <Badge value={resultado} className='sedeBadgeContador' size="xlarge"> avisos</Badge>
            <Button label="No tienes favoritos guardados" link  className='btn-link-ico-right' disabled > </Button>
        </Card>
    )
} 