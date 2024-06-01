import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <p>hello</p>
      <Outlet></Outlet>
    </>
  );
}

export default App;
