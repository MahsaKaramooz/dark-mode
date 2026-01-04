import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Cards from "./components/card/Cards";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";


function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`appContainer ${theme}`}>
      <Navbar />
      <Cards />
    </div>
  );
}

export default App;
