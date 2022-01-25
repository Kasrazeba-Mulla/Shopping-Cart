import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import appStore from "./components/store/reduxIndex";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);