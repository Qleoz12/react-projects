import { authManager } from "./auth"

const fetchSecured = async (uri : string, method : string) => {
  const bearer = authManager.getAuthorizationHeaderValue()
  const options = {
    method: method,
    headers: {
      Authorization: bearer,
      "Content-Type": "application/json",
      "X-Frame-Options": "SAMEORIGIN",
    }
  }
  const response = await fetch(uri, options)
  if (!response.ok) {
    throw await response.json()
  }
  return response.json()
}

const fetchNOSecure = async (uri : string, method : string) => {
  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "X-Frame-Options": "SAMEORIGIN",
    }
  }
  const response = await fetch(uri, options)
  if (!response.ok) {
    throw await response.json()
  }
  return response.json()
}

const fetchSecuredIdPers = async (uri : string, method : string, idPers: string) => {
  const bearer = authManager.getAuthorizationHeaderValue()
  const options = {
    method: method,
    headers: {
      Authorization: bearer,
      "Content-Type": "application/json",
      "X-Frame-Options": "SAMEORIGIN",
      idPers: idPers
    }
  }
  const response = await fetch(uri, options)
  if (!response.ok) {
    throw await response.json()
  }
  return response.json()
}

const fetchSecuredGeneric = async (uri : string, method : string, data: object) => {
  const bearer = authManager.getAuthorizationHeaderValue()
  const options = {
    method: method,
    headers: {
      Authorization: bearer,
      "Content-Type": "application/json",
      "X-Frame-Options": "SAMEORIGIN",
      ...data
    }
  }
  const response = await fetch(uri, options)
  if (!response.ok) {
    throw await response.json()
  }
  return response.json()
}

export { fetchSecured, fetchSecuredIdPers,fetchNOSecure,fetchSecuredGeneric}
