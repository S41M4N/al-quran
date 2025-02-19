import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.jsx";
import { persistor, store } from "./store/store.js";
import "./fonts.scss";
import "./index.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<>Loading...</>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
