import { useState } from "react";
import PaginaInicial from "./components/PaginaInicial";
import Perguntas from "./components/Perguntas";

export default function App() {
  const [botao,setBotao] = useState(false);
  return (botao===true?<Perguntas/>:<PaginaInicial setBotao={setBotao}/>);
}



