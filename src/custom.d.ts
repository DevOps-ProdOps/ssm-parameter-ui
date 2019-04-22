import { compose } from "redux";

declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
