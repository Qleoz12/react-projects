import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Badge } from 'primereact/badge';
import { FC } from 'react';

interface IProps {
    avisos:number
}
export const  Avisos:FC<IProps> = (avisos) => {
    

    return (
        
        <Card className='sedeContenidoFondoBlanco w-50'>
            <i className="pi pi-bell " >AVISOS</i>
            <Badge value={avisos.avisos} className='sedeBadgeContador' size="xlarge"> avisos</Badge>
            <Button label="Mis Avisos" link icon="pi-arrow-right" className='btn-link-ico-right'> </Button>
        </Card>
    )
} 