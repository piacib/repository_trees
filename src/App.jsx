import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TreeComp from "./Tree";
const useUrlParams = () => {
  return params;
};
function App() {
  const [count, setCount] = useState(0);
  const queryParameters = new URLSearchParams(window.location.search);
  const repository = queryParameters.get("repository");

  return <>{repository === "pokeinfo" && <TreeComp />}</>;
}

export default App;
