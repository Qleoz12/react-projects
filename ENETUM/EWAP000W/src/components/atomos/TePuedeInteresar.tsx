import { Button } from "primereact/button"
import { Card } from "primereact/card"
import GreetDTO from "../../dtos/greet.dto";
import { useEffect, useState } from "react";
import { useMountEffect } from "primereact/hooks";


interface OutStandingData {
    data: GreetDTO[];
    languaje: string
}


export const TePuedeInteresar = ({ data, languaje }: OutStandingData) => {

    const [innerData, SetInnerData] = useState<GreetDTO[]>([]);


    const openUrl = (url: string, tipoEnlace: string) => {
        if (tipoEnlace.toLowerCase() === "m") {
            window.open(url, "_blank");
        } else if (tipoEnlace.toLowerCase() === "n") {
            window.open(url, "_self");
        }
    };

    useMountEffect(() => {
        console.log("TePuedeInteresar loaded")
    });

    useEffect(() => {

        if (data && data.length>0) {
            // console.log("cambio" + languaje)
            data = data?.slice().sort((a, b) => a.orden - b.orden);
            data.map((item) => showDesc(item))
            SetInnerData(data);
        }

    }, [data, languaje])

    const showDesc = (item: GreetDTO) => {
        console.log(item)
        if (languaje === 'eu') {
            item.url = item.urlEnlaceEu
            item.description = (item?.descripcionEu)
        }
        if (languaje === 'es') {
            item.description = (item?.descripcionEs)
            item.url = item.urlEnlaceEs
        }
        return item;
    }


    return (

        <Card className="sedeContenidoFondo">
            <Card className="sedeContenidoFondoGrisTransparent">
                <h3>Te puede interesar</h3>
                {innerData?.map((buttonItem, index) => (
                    <Button
                        className="btn-secondary-outline center"
                        onClick={() => openUrl(buttonItem.url || '', buttonItem.tipoEnlace)}
                        key={index}
                    >{buttonItem.description}</Button>
                ))}
            </Card>
        </Card>
    )
}