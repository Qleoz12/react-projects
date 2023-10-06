import { AuthService } from '@bide/bide-auth-client';
import { ReactElement } from 'react';

export interface iCheckProps {
  authManager: AuthService;
  component: ReactElement;

}

export const CheckSessionComponent = ({authManager, component} : iCheckProps) => {

  try {
    authManager.forceCheckSession('mecanismo.nivel:urn:safelayer:tws:policies:authentication:level:low', { state: { destino: "/" + window.location.search } });
  } catch (error) {
  
    console.log(error);    
  }
  

  return component;
}