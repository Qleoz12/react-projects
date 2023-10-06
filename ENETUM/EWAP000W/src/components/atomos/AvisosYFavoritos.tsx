import { Card } from 'primereact/card';
import { Avisos } from './Avisos';
import { Favoritos } from './Favoritos';
import { FC } from 'react';

interface IAvisosYFavoritos {
    favoritos:number,
    avisos:number;
}


export const AvisosYFavoritos:FC<IAvisosYFavoritos> = ({favoritos, avisos}:IAvisosYFavoritos) => {
    let resultadosFavoritos = favoritos

    return (
        <Card className='sedeContenidoFondoGris sedeAreaPersonalWidget'>

            <Avisos avisos = {avisos}></Avisos>
            <Favoritos favoritos={resultadosFavoritos} ></Favoritos>
        </Card>
    );
}