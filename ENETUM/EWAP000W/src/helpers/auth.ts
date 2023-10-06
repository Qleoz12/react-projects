import { authManager as authManagerTemplate } from "ewpl000w"

export const authConfig = {
  clientId: "SEL_INTER_EW",
  authUrl: import.meta.env.VITE_APP_P23_ENDPOINT,
  postLogoutRedirectUri: import.meta.env.VITE_APP_P23_LOGOUT,
  redirectUri: import.meta.env.VITE_APP_P23_CALLBACK,
  redirectRefreshUri: import.meta.env.VITE_APP_P23_CALLBACK,
  scope: "SEDE",
  refreshSession: false,
  checkSessionMilis: 30000,
  iframeId: "iframeRefresh",
  language: "es_ES",
  getUserInfo: false,
  responseType: "idtoken token",
  responseMode: "query",
  sso: "always",
  securityLog: true
}

export const authManager = authManagerTemplate(authConfig);