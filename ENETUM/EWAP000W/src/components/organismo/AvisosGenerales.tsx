import { useMountEffect } from 'primereact/hooks';
import { MessageGeneral } from '../atomos/MessageGeneral.atom';
import { InfoIcon } from '../../assets/Icons/info';
import { Button } from 'primereact/button';
import { CloseIcon } from '../../assets/Icons/close';
import { ResponseItem } from '../../helpers/interfaces/IAvisosGenerales';
import { Dialog } from 'primereact/dialog';
import { useState } from "react";
import React from 'react';


interface AvisosGeneralesData {
    title:string
    data: ResponseItem[];
    languaje: string
}


export const AvisosGenerales = ({ title, data, languaje }: AvisosGeneralesData,) => {

    const [visible, setVisible] = useState(false);
    const [visibleComponent, setVisibleComponent] = useState(true);
    const [innerTitle, setInnerTitle] = useState("");
    const [innerdesc, setInnerdesc] = useState("");


    useMountEffect(() => {
        console.log("AvisosGenerales loaded")
    });

    const showDesc = (item: ResponseItem) => {
        console.log(item)
        if (languaje === 'eu') {
            setInnerTitle(item.tituloEu)
            setInnerdesc(item?.descripcionEu)
        }
        if (languaje === 'es') {
            setInnerTitle(item.tituloEs)
            setInnerdesc(item?.descripcionEs)
        }
        if (item?.descripcionEs != undefined && item?.descripcionEs.length > 0) {
            setVisible(true)
        }
    }

    const closeDesc = () => {
        setVisible(false)
        setInnerTitle("")
        setInnerdesc("")
    }

    const closeComponent = () => {
        setVisibleComponent(false)
    }

    return (
        <>
        {visibleComponent && (    
        <section className='sedeTextoImportante'>
            <div key={Math.random()}>
                <div >
                    <div>
                        <InfoIcon></InfoIcon>
                    </div>
                    <div>{title}</div>
                </div>
                <Button onClick={closeComponent}>
                    <CloseIcon></CloseIcon>
                </Button>

            </div>
            <section key={Math.random()+1}>
                {data?.map((x: ResponseItem,index) => (
                   <React.Fragment key={index}>
                   {languaje === 'eu' && (
                     <MessageGeneral
                       value={x.tituloEu}
                       onClick={() => showDesc(x)}
                     />
                   )}
               
                   {languaje === 'es' && (
                     <MessageGeneral
                       value={x.tituloEs}
                       onClick={() => showDesc(x)}
                     />
                   )}
                 </React.Fragment>
                ))}
                <Dialog header="Avisos" visible={visible} onHide={() => closeDesc()}>
                    <h3>{innerTitle}</h3>
                    <p >
                        {innerdesc}
                    </p>
                    <Button label="Aceptar" onClick={() => closeDesc()}>
                    </Button>
                </Dialog>
            </section>
        </section>)}
        </> 
    )
}
