import axios from "axios";
import {
  getInLocalStorage,
  getValidationError,
  LocalStorageKeys,
  saveInLocalStorage,
} from "../utilities";
import { SnackbarUtilities } from "../utilities/snackbar-manager";

export const AxiosInterceptor = () => {
  saveInLocalStorage(LocalStorageKeys.TOKEN, "123123123123");

  const updateHeader = (request) => {
    const baseURL = "http://localhost:4000/api/v1";
    const token = getInLocalStorage(LocalStorageKeys.TOKEN);
    const newHeaders = {
      Authorization: token,
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };
    request.baseURL = baseURL;
    request.headers = newHeaders;
    request.withCredentials = true;

    return request;
  };

  axios.interceptors.request.use((request) => {
    if (request.url?.includes("assets")) return request;

    return updateHeader(request);
  });

  axios.interceptors.response.use(
    (response) => {
      SnackbarUtilities.success(response.data?.message);
      return response.data;
    },
    (error) => {

      console.log(error.response.data.message);
      if ('code' in error)  SnackbarUtilities.error(getValidationError(error.code));
      if ('statusCode' in error)  SnackbarUtilities.error(getValidationError(error.statusCode));
      return Promise.reject(error);
    }
  );
};

// export const axios = axios.create({
//   baseURL: "http://localhost:3000/api/v1/",
//   withCredentials: true,
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     "Content-Type": "application/json",
//   },
// });
