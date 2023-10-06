import { Route,Routes, useNavigate } from "react-router-dom"


//import authManager from "./../helpers/auth"

//import ErrorPage from "./../pages/ErrorPage"

//import qs from "qs"
import AreaPrincipal from "../components/AreaPrincipal"
import Autentication from "../components/Autentication"
import { CheckSessionComponent } from "../components/CheckSession"
import { ErrorSSO } from "@bide/bide-auth-client"
//import { authManager } from "ewpl000w"
import { authManager } from "../helpers/auth"
import { Logout } from "../components/Logout"

const Router = () => {


  /*const recuperarParams = (location) => {
    return qs.parse(location.search, { ignoreQueryPrefix: true })
  }*/

  //const location = useLocation();
  const navigate = useNavigate();
  return (
    <Routes>
      ^<Route
        path={"/"}
        element={<AreaPrincipal/>}
        />
      {/* <Route
        path={"/"}
        element={<CheckSessionComponent
            component={<AreaPrincipal />}
            authManager={authManager}
          />
        }
      /> */}

      <Route
        path={"/auth-callback"}
        element={ <Autentication authManager={authManager} 
                    successCallback={(state : any) => {
                      console.log("====> navigate to /")
                      console.log("====> state: ", state)
                      navigate("/", { replace: true })
                      //meter en contexto o setUser()
                    }}

                    errorCallback={(error :ErrorSSO) => {
                      console.log("====> navigate to ERROR")
                      navigate("/error", { replace: true })
                      //??????
                      console.log(error);
                    }}        
                    />
        }
      />

      <Route 
          path={"/logout-callback"}
          element={ <Logout authManager={authManager}
                      successCallback={() => {
                        window.location.replace(import.meta.env.VITE_APP_SEDE_HOME)
                      }}
                      errorCallback={(error :ErrorSSO) => {
                        console.log("====> navigate to ERROR")
                        navigate("/error", { replace: true })
                        //??????
                        console.log(error);
                      }}/>     
          }   
          />

      {/*<Route path="/error" element={<ErrorPage/>} />*/}
      {/*<Route path="*" element={<NotFoundPage />} />*/}
    </Routes>
  )
}

export default Router