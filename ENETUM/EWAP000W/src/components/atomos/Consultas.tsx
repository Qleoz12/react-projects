import { Button } from "primereact/button"
import { Card } from "primereact/card"


export const Consultas = () => {

    return (

        <Card className="sedeContenidoFondoTurquesa">
             <div className="p-card-content__text">
            <h3> <img src="https://appstac.desebizkaia.bfa/EW9NCSSE/irudiak/sedeIcoChat.svg  "/> Consultas, quejas y sugerencias</h3>
            <p> ¿Quieres realizar una consulta o necesitas ayuda? Dinos en qué podemos ayudarte.</p>
            </div>
        <Button className="btn-secondary-outline-ico-right" label="Acceder" icon="pi-arrow-right" iconPos="right" > <img src="https://appstac.desebizkaia.bfa/EW9NCSSE/irudiak/sedeIcoArrowRight.svg "></img></Button>
        </Card>
    )
}