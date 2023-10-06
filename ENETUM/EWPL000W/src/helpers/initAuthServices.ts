import { AuthService } from '@bide/bide-auth-client';

export interface authConfig {
  clientId: string;
  clientSecret?: string;
  authUrl: string;
  postLogoutRedirectUri: string;
  redirectUri: string;
  redirectRefreshUri?: string;
  scope: string;
  refreshSession?: boolean;
  checkSessionMilis?: number;
  iframeId?: string;
  refreshType?: string;
  language: string;
  getUserInfo?: boolean;
  responseType: string;
  responseMode: string;
  sso: string;
  resource?: string;
  checkIdToken?: boolean;
  publicKey?: string;
  securityLog?: boolean;
};

export function initAuthServices(config: authConfig): AuthService {
  return new AuthService(config);
}