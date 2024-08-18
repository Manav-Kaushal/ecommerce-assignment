import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import App from "./App.tsx";
import ProductsProvider from "./contexts/productsContext.tsx";
import "./index.css";
import { DrawerProvider } from "./lib/hooks/useDrawer.tsx";
import store from "./redux/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProductsProvider>
      <Provider store={store}>
        <DrawerProvider>
          <Toaster />
          <App />
        </DrawerProvider>
      </Provider>
    </ProductsProvider>
  </StrictMode>
);
