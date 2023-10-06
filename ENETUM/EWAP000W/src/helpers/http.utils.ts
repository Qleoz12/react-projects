import { authManager } from "./auth";

const bearer = authManager.getAuthorizationHeaderValue()
export const config = {
  headers: { Authorization: `Bearer ${bearer}` }
};