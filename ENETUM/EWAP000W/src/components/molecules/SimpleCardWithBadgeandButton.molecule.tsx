import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Badge } from 'primereact/badge';
import { FC, ReactElement } from 'react';

interface IProps {
    avisos: number,
    tittle: string
    buttnLabel: string
    icon: ReactElement
    iconButtonlink?: ReactElement
    clickHandler:any

}
export const SimpleCardWithBadgeandButton: FC<IProps> = (avisos) => {




    return (

        <Card className='sedeContenidoFondoBlanco w-50' title={<h4> {avisos.icon} {avisos.tittle} </h4>} >
            <Badge value={avisos.avisos} className='sedeBadgeContador' size="xlarge" ></Badge>
            <div>
                <Button 
                label={avisos.buttnLabel} link className='btn-link-ico-right'
                onClick={avisos.clickHandler} ></Button>
                { avisos.iconButtonlink && (avisos.iconButtonlink)}
            </div>
        </Card>
    )
} 