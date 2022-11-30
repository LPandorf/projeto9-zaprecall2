import { useState } from "react";
import PaginaInicial from "./components/PaginaInicial";
import PaginaPerguntas from "./components/PaginaPerguntas";

export default function App() {
  const [botao,setBotao] = useState(false);
  return (botao===true?<PaginaPerguntas/>:<PaginaInicial setBotao={setBotao}/>);
}



