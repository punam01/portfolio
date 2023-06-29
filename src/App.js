import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
      </BrowserRouter>
    </>
  );
}

export default App;
