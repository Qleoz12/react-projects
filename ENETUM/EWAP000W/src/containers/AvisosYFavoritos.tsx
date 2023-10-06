import { Card } from 'primereact/card';
import { FC, useEffect, useState } from 'react';
import { SimpleCardWithBadgeandButton } from '../components/molecules/SimpleCardWithBadgeandButton.molecule';
import { BellIcon } from '../assets/Icons/bell';
import { StarIcon } from '../assets/Icons/star';
import { i18n } from 'ewpl000w';
import { ArrowRightIcon } from '../assets/Icons/ArrrowRight';
import { useMountEffect } from 'primereact/hooks';

interface IAvisosYFavoritos {
    favoritos: number,
    avisos: number;
}


export const AvisosYFavoritos: FC<IAvisosYFavoritos> = ({ favoritos, avisos }: IAvisosYFavoritos) => {
    const [favoritosState, setFavoritosState] = useState(0);
    const [favoritosStatelabel, setFavoritosStateLabel] = useState("");
    const [language, setLanguage] = useState<string>('es');
    const t = i18n.t;
    i18n.on('languageChanged', function (language: any) {
        setLanguage(language);
    });

    useMountEffect(() => {
        console.log("AvisosYFavoritos loaded")
    });

    const favoritosIcon = favoritosState > 0 ? <ArrowRightIcon /> : <></>;
    const openUrl = (url: string) => {
        window.open(url, "_blank");
    };

    const VITE_APP_DOMINIO_ATARIA_BIZKAIA_EUS = import.meta.env.VITE_APP_DOMINIO_ATARIA_BIZKAIA_EUS;
    useEffect(() => {
        setFavoritosState(favoritos)
        if (favoritos <= 0) {
            setFavoritosStateLabel(t('no') + " " + t('tiene') + " ".concat(" " + t('favoritos') + " ").concat(" " + t('guardados')))
        }
        if (favoritos > 0) {
            setFavoritosStateLabel(t('mis').concat(" " + t('favoritos')))
        }
    }, [favoritos, language])


    return (
        <Card className='sedeContenidoFondoGris sedeAreaPersonalWidget'>
            <SimpleCardWithBadgeandButton
                buttnLabel={t('mis').concat(" " + t('avisos'))}
                tittle={t('avisos')}
                avisos={avisos}
                icon={<BellIcon />}
                iconButtonlink={<ArrowRightIcon />}
                clickHandler={()=>openUrl(t('url.avisos', { dominio: VITE_APP_DOMINIO_ATARIA_BIZKAIA_EUS }))}
                key={0}
            />
            <SimpleCardWithBadgeandButton
                buttnLabel={favoritosStatelabel}
                tittle={t('favoritos')}
                avisos={favoritosState}
                icon={<StarIcon />}
                iconButtonlink={favoritosIcon}
                clickHandler={()=>openUrl(t('url.favoritos', { dominio: VITE_APP_DOMINIO_ATARIA_BIZKAIA_EUS }))}
                key={1}
            />
        </Card>
    );
}