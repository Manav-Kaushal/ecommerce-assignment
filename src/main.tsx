import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import App from "./App.tsx";
import ProductsProvider from "./contexts/productsContext.tsx";
import "./index.css";
import store from "./redux/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProductsProvider>
      <Provider store={store}>
        <Toaster />
        <App />
      </Provider>
    </ProductsProvider>
  </StrictMode>
);
