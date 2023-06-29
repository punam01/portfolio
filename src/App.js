import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Home></Home>
        <About></About>
      </BrowserRouter>
    </>
  );
}

export default App;
