//import { authManagerConfig } from "../../templates"

const fetchSecured = async (uri : string, method : string, bearer : string) => {
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

export { fetchSecured }
