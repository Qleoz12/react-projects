import { FC /*,useEffect,useState*/ } from 'react'
//import { fetchSecured } from '../helpers/http'
//import authManager from '../helpers/auth'
import { saludar } from '../helpers/saludo'
//import { authManager } from 'ewpl000w';
import { /*authConfig,*/ authManager } from '../helpers/auth';

interface iProps{
  saludo : string;
}
const Saludo:FC<iProps> = ({saludo} :iProps) => {
  //const [saludo, setSaludo] = useState('');

  /* useEffect(() => {
    fetchSecured(import.meta.env.VITE_APP_PU + 'false', "get")
    .then(response => {
      setSaludo(response.saludo)
    })
    .catch((error) =>(console.log("Error ", error)))
  }, [])*/
  return (
    
    <div >
    {/* <h3> {saludar( saludo, authManager.getSecuritySession().credential.userInfo.nombre)} </h3> */}
    </div>
  )
}

export default Saludo