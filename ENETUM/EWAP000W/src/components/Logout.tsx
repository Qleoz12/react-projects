import { AuthService, ErrorSSO } from '@bide/bide-auth-client';

export interface ILogoutCallBackProps {
  match?: any;
  location?: any;
  authManager: AuthService;
  successCallback(): void;
  errorCallback(error?: ErrorSSO, state?: Object): void;
}

export const Logout = (props: ILogoutCallBackProps) => {
  props.authManager.processLogoutResponse().then(() => {
      props.successCallback();
  }, (error: ErrorSSO) => {
      props.errorCallback(error);
  });

  return null;
}