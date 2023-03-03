import { useState } from "react";
import About from "./components/About.jsx";
import Contacto from "./components/Contacto.jsx";
import NavBar from "./components/NavBar.jsx";
import Skills from "./components/Skills.jsx";
import Welcome from "./components/Welcome.jsx";
import Portafolio from "./components/Portafolio.jsx";

function App() {
  const [lengua, setLengua] = useState(true);
  return (
    <div className="body">
      <NavBar setLengua={setLengua} lengua={lengua}></NavBar>
      <Welcome lengua={lengua}></Welcome>
      <Portafolio lengua={lengua}></Portafolio>
      <Skills lengua={lengua}></Skills>
      <About lengua={lengua}></About>
      <Contacto lengua={lengua}></Contacto>
    </div>
  );
}

export default App;
