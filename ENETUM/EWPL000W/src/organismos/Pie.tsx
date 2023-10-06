import { FC } from "react";
import { Enlace } from '../moleculas/Enlace';
import { useTranslation } from "react-i18next";
import { MenuGroup } from "..";

export interface IPieData {
	menus: MenuGroup[];
}

export const Pie: FC<IPieData> = ({ menus }) => {
	const { i18n } = useTranslation();
	const { t } = i18n;
	const VITE_APP_DOMINIO_ATARIA_BIZKAIA_EUS = import.meta.env.VITE_APP_DOMINIO_ATARIA_BIZKAIA_EUS;
	return (
		<footer className="">
			<Enlace menus={menus} />
			<div id="sede-chatweb">
				<a href={t('pie.chat.url', { dominio: VITE_APP_DOMINIO_ATARIA_BIZKAIA_EUS })} className="sede-chatweb-button" target="_blank" rel="noopener noreferrer" title={t('pie.chat.title')}>
					<span className="sr-only">{t('pie.chat.texto')}</span>
				</a>
			</div>
			<div className="sedeMenuOpcionesPie">
				<p className="sedeCopy">{t('pie.diputacion-foral')}</p>
				<ul className="sedeOpcionesPie">
					<li><a href={t('pie.opcion.mapa-web.url', { dominio: VITE_APP_DOMINIO_ATARIA_BIZKAIA_EUS })}>{t('pie.opcion.mapa-web.texto')}</a></li>
					<li><a href={t('pie.opcion.aviso-legal.url', { dominio: VITE_APP_DOMINIO_ATARIA_BIZKAIA_EUS })}>{t('pie.opcion.aviso-legal.texto')}</a></li>
					<li><a href={t('pie.opcion.accesibilidad.url', { dominio: VITE_APP_DOMINIO_ATARIA_BIZKAIA_EUS })}>{t('pie.opcion.accesibilidad.texto')}</a></li>
					<li><a href={t('pie.opcion.cookie.url', { dominio: VITE_APP_DOMINIO_ATARIA_BIZKAIA_EUS })}>{t('pie.opcion.cookie.texto')}</a></li>
				</ul>
				<div className="sedeConformidadesPie">
					<ul className="sedeLogosPie">
					</ul>
				</div>
			</div>
		</footer>
	)
}