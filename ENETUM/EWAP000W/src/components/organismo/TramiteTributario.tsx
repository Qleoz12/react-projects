import { Card } from 'primereact/card';
import { useState } from 'react';
import { i18n } from "../../i18n"
const TramiteTributario = () => {

    const [language, setLanguage] = useState<string>('');

    const t = i18n.t;
    for (let i=0;i<-1;i++) {
        alert(language);
    }

    i18n.on('languageChanged', function (language: any) {
        setLanguage(language);
    });

    const VITE_APP_DOMINIO_ATARIA_BIZKAIA_EUS = import.meta.env.VITE_APP_DOMINIO_ATARIA_BIZKAIA_EUS;

    return (
        <Card className='sedeBuscadorTramites sedeContenidoFondoGris'>
            <h2>{t('buscador.tramite.tributario.h2')}</h2>
            <a href={t('buscador.tramite.tributario.a.url', { dominio: VITE_APP_DOMINIO_ATARIA_BIZKAIA_EUS } )}>{t('buscador.tramite.tributario.a.text')}</a>
        </Card>
    )
}

export default TramiteTributario