import React, { useState } from "react";
import { evaluate } from "mathjs";
import "./Calculadora.css";

const Calculadora = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleBorrar = () => {
    setInput("");
  };

  const handleCambiarSigno = () => {
    if (input.startsWith("-")) {
      setInput(input.slice(1));
    } else {
      setInput("-" + input);
    }
  };

  const handleOperacion = () => {
      const resultado = evaluate(input);
      setInput(resultado.toString());
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="calculadora col-12 col-sm-8 col-md-6 col-lg-4">
        <div className="display">
          <input type="text" value={input} readOnly/>
        </div>
        <div className="botones">
          
          <button onClick={handleBorrar} className="btn btn-light">
            AC
          </button>
          <button onClick={handleCambiarSigno} className="btn btn-light">
            +/-
          </button>
          <button onClick={() => handleClick("%")} className="btn btn-light">
            %
          </button>
          <button onClick={() => handleClick("/")} className="btn operador">
            ÷
          </button>
          <button onClick={() => handleClick("7")} className="btn btn-light">
            7
          </button>
          <button onClick={() => handleClick("8")} className="btn btn-light">
            8
          </button>
          <button onClick={() => handleClick("9")} className="btn btn-light">
            9
          </button>
          <button onClick={() => handleClick("*")} className="btn operador">
            ×
          </button>
          <button onClick={() => handleClick("4")} className="btn btn-light">
            4
          </button>
          <button onClick={() => handleClick("5")} className="btn btn-light">
            5
          </button>
          <button onClick={() => handleClick("6")} className="btn btn-light">
            6
          </button>
          <button onClick={() => handleClick("-")} className="btn operador">
            -
          </button>
          <button onClick={() => handleClick("1")} className="btn btn-light">
            1
          </button>
          <button onClick={() => handleClick("2")} className="btn btn-light">
            2
          </button>
          <button onClick={() => handleClick("3")} className="btn btn-light">
            3
          </button>
          <button onClick={() => handleClick("+")} className="btn operador">
            +
          </button>
          <button
            onClick={() => handleClick("0")}
            className="btn btn-light cero"
          >
            0
          </button>
          <button onClick={() => handleClick(".")} className="btn btn-light">
            .
          </button>
          <button onClick={handleOperacion} className="btn operador">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculadora;
