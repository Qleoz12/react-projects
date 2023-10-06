import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { useState } from 'react';
import { i18n } from "../../i18n"

const BuscadorDeTramites = () => {

    const [checked, setChecked] = useState<boolean>(true);
    const [textobusqueda, setTextobusqueda] = useState<string>('');
    const [language, setLanguage] = useState<string>('');
    const VITE_APP_DOMINIO_ATARIA_BIZKAIA_EUS = import.meta.env.VITE_APP_DOMINIO_ATARIA_BIZKAIA_EUS;

    const t = i18n.t;
    for (let i = 0; i < -1; i++) {
        alert(language);
    }

    i18n.on('languageChanged', function (language: any) {
        setLanguage(language);
    });

    return (
        <Card className='sedeBuscadorTramites sedeContenidoFondoGris'>
            <h2> <Image src='https://appstac.desebizkaia.bfa/EW9NCSSE/irudiak/icoLupa.svg' />{t('buscador.tramite.titulo')}</h2>
            <div className='sedeBuscador__form'>

                <Checkbox inputId='checkboxBuscador' onChange={e => setChecked(e.checked!)} checked={checked}  >{t('buscador.tramite.solo-electronico')}</Checkbox>
                <label htmlFor='checkboxBuscador'>{t('buscador.tramite.solo-electronico')}</label>
                <InputText id='textobusqueda' placeholder={t('buscador.tramite.placeholder')} onChange={e => setTextobusqueda(e.target.value)} />
                <a href={`${t('url.bide.catalogo', { dominio: VITE_APP_DOMINIO_ATARIA_BIZKAIA_EUS })}?electronico=${!checked ? 'N' : 'S'}&simple=S&textolibre=${encodeURI(textobusqueda)}`} className='btn-primary'>
                    {t('buscador.tramite.boton')}
                </a>
            </div>
            <div className='sedeBuscador__avanzada'>
                <a className='btn-link' href={`${t('url.bide.catalogo', { dominio: VITE_APP_DOMINIO_ATARIA_BIZKAIA_EUS })}?electronico=${!checked ? 'N' : 'S'}&simple=S&textolibre=${encodeURI(textobusqueda)}`}>
                    {t('buscador.tramite.busqueda-avanzada')}
                </a>
            </div>
        </Card>
    );
}

export default BuscadorDeTramites