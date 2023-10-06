import { useEffect, useState, Suspense } from 'react'
import Saludo from './Saludo'
import { SedeLayout, getRol, i18n, isProfesional } from 'ewpl000w'
import { authConfig, authManager } from '../helpers/auth'
import { fetchSecuredIdPers } from '../helpers/http'
import MisDatos from './atomos/MisDatos'
import BuscadorDeTramites from './organismo/BuscadorDeTramites'
import { Consultas } from './atomos/Consultas'
import { TePuedeInteresar } from './atomos/TePuedeInteresar'
import { AvisosYFavoritos } from '../containers/AvisosYFavoritos'
import TramiteTributario from './organismo/TramiteTributario'
import { AvisosGenerales } from './organismo/AvisosGenerales'
import { getoutStandingByRol } from '../helpers/outstanding.service'
import { getNotices } from '../helpers/notices.service'
import { ResponseItem } from '../helpers/interfaces/IAvisosGenerales'
import GreetDTO from '../dtos/greet.dto'
import { getFavorites } from '../helpers/favorites.service'
const AreaPrincipal = () => {

  const [avisos, setAvisos] = useState(0);
  const [notices, setNotices] = useState<ResponseItem[]>([]);
  const [favorites, setFavorites] = useState<number>(0);
  const [outStanding, setOutStanding] = useState<GreetDTO[]>([]);
  const [datosVuelta, setDatosVuelta] = useState<any>(null);//TODO Bad Practice any 
  const [language, setLanguage] = useState<string>('es');

  const t = i18n.t;

  i18n.on('languageChanged', function (language: any) {
    setLanguage(language);
  });




  useEffect(() => {
    datosVuelta && fetchSecuredIdPers(import.meta.env.VITE_APP_AV, "get", datosVuelta.idPers)
      .then(response => { setAvisos(response.numAvisos) })
      .catch((error) => (console.log("Error ", error)))
  }, [datosVuelta])

  // load notices
  useEffect(() => {
    const data = { profile: getRol() };
    getNotices(data)
      .then((response: any) => {
        setNotices(response.data)
      })
      .catch(error => {
        console.log(error.response)
      });
  }, [])

  // load outstandings
  useEffect(() => {
    const data = { profile: isProfesional() };
    getoutStandingByRol(data)
      .then(response => {
        // console.log(response)
        setOutStanding(response)
      })
      .catch(error => {
        console.log(error.response)
      });
  }, [])

  // load favs
  useEffect(() => {
    const data = { profile: isProfesional() };
    // datosVuelta && 
    getFavorites("idpersona","idPersonaActuante")
      .then(response => {
        // console.log(response)
        setFavorites(response.numFavoritos)
      })
      .catch(error => {
        console.log(error.response)
      });
  }, []) //[datosVuelta]



  return (
    <>

      <SedeLayout setDatosVuelta={setDatosVuelta} confSeguridad={authConfig} bearer={authManager.getAuthorizationHeaderValue()} numeroavisos={avisos} language={language}
        isAuthenticated={authManager.isAuthenticated()} >



        <Suspense fallback={<p>CARGANDO</p>}>
        </Suspense>
        <div className='sedeContenedorGral sedeContenedorLogged'>
          <AvisosGenerales title={t('important')} data={notices} languaje={language}></AvisosGenerales>
          {isProfesional() ? <TramiteTributario /> : <BuscadorDeTramites />}
          <h1 > Area Personal</h1>
          <Saludo saludo={datosVuelta && datosVuelta.saludo} />
          <MisDatos></MisDatos>
          <AvisosYFavoritos avisos={avisos} favoritos={favorites}></AvisosYFavoritos>
          <Consultas></Consultas>
          <TePuedeInteresar data={outStanding} languaje={language}></TePuedeInteresar>
        </div>
      </SedeLayout>

    </>
  )
}

export default AreaPrincipal
