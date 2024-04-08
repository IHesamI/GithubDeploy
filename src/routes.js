import { createElement } from "react";
import AboutUs from "./AboutUs";

export const routes = creat([
  {
    path: "/",
    element: createElement(App),
  },
  {
    path: "/about-us",
    element: createElement(AboutUs),
  },
]);
