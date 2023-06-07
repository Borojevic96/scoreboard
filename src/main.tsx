import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App.tsx";
import "./main.scss";

const domNode = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  domNode
);
