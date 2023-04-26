import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Mumbai, Polygon } from "@thirdweb-dev/chains";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Provider> */}
    <ThirdwebProvider activeChain={Mumbai} supportedChains={[Mumbai, Polygon]}>
      <App />
    </ThirdwebProvider>
    {/* </Provider> */}
  </React.StrictMode>
);
