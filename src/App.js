import { BrowserRouter } from "react-router-dom";
import { Routes } from "./config/Route/Route";

function App() {
  return (
    <>
      <BrowserRouter basename="/campcar-rent-project">
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
