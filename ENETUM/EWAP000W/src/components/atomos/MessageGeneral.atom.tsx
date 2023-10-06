import { Card } from 'primereact/card';
import { CarretRightIcon } from '../../assets/Icons/caret-right';

export const  MessageGeneral = ({value, onClick}:any) => {
    return (
        
        <Card onClick={onClick}>
            {/* //TODO cambiar por el uso de clases de primeReact pi-picaret-right y clases css mas genericas  y combinanbles*/}
            <div><CarretRightIcon /> </div>
            <p> {value}</p>
        </Card>
    )
} 