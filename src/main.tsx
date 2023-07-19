import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ProductProvider } from "./context/Product.tsx";
import CounterProvider from "./context/Counter.tsx";
import { Provider } from "react-redux";
import store from "./app/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    // <ProductProvider>
    //     <CounterProvider>
    //         <App />
    //     </CounterProvider>
    // </ProductProvider>
    <Provider store={store}>
    <App />
</Provider>
);
