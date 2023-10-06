import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import es from "./es.json"
import eu from "./eu.json"

const resources = {
    es: {translation: es},
    eu: {translation: eu}
}


i18next
.use(initReactI18next)
.init({
    resources,
    lng:"es", //idioma por defecto
});

export default i18next
/*
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import cabecera_es from "./es.json"
import cabecera_eu from "./eu.json"

const init = (resources:any) => {
    i18next
    .use(initReactI18next)
    .init({
        resources,
        lng:"es", 
    });
}

export default i18next;

export {i18next as cabecera_i18n, init, cabecera_es, cabecera_eu}
*/