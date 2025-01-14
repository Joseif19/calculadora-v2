import React, { useState } from "react";
import { evaluate } from "mathjs";
import Calculadora from "./components/Calculadora";

function App() {
  const [input, setInput] = useState("");
  const [resultadoMostrado, setResultadoMostrado] = useState(false);

  const handleClick = (value) => {
    if (resultadoMostrado && !isNaN(value)) {
      setInput(value); 
      setResultadoMostrado(false);
    } else {
      setInput((prev) => prev + value);
    }
  };

  const handleBorrar = () => {
    setInput("");
    setResultadoMostrado(false);
  };

  const handleCambiarSigno = () => {
    if (input.startsWith("-")) {
      setInput(input.slice(1));
    } else {
      setInput("-" + input);
    }
  };

  const handleOperacion = () => {
    try {
      const resultado = evaluate(input);
      setInput(resultado.toString());
      setResultadoMostrado(true); 
    } catch {
      setInput("Error");
      setResultadoMostrado(true);
    }
  };

  return (
    <div>
      <Calculadora
        input={input}
        onClick={handleClick}
        onBorrar={handleBorrar}
        onCambiarSigno={handleCambiarSigno}
        onOperacion={handleOperacion}
      />
    </div>
  );
}

export default App;
