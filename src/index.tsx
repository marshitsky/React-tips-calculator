import ReactDOM from "react-dom/client";
import { App } from "./App";
import { GlobalStyle } from "./ui/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <>
    <GlobalStyle />
    <App />
  </>,
);
