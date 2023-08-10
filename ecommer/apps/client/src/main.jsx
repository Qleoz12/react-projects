import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AxiosInterceptor } from "./interceptors/axios.interceptors";

import "./assets/styles/index.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Provider } from "react-redux";
import store from "./redux/store";

AxiosInterceptor();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
