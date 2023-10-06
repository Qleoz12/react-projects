import { AuthService, /*AuthenticationResult,*/ ErrorSSO, SessionInfo } from '@bide/bide-auth-client';

interface ICallBackProps {
  match?: any;
  location?: any;
  authManager: AuthService;

  successCallback(sessionInfo?: SessionInfo, state?: any): void;
  errorCallback(error?: ErrorSSO, state?: any): void;

}

const Autentication = (props: ICallBackProps) => {
  props.authManager.processLoginResponse().then((authResult) => {
    console.log("authManager.processLoginResponse")
    console.log("authResult", authResult)
    //props.successCallback(authResult.session, authResult.state.data);
    props.successCallback(authResult.state.data);

  })
  .catch((error: ErrorSSO) => {
    console.log("Error autenticación")
    props.errorCallback(error, error.state);
  });

  /*props.authManager.processLoginResponse().then((result: AuthenticationResult | ErrorSSO) => {
    console.log("authResult", result)
    //props.successCallback(authResult.session, authResult.state.data);
    props.successCallback();

  }, (error: ErrorSSO) => {
    if (error) {
      props.errorCallback(error, error.state);
    }
  });*/

  return null
}

export default Autentication