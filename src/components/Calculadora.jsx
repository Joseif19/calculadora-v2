import React from "react";
import "./Calculadora.css";

const Calculadora = ({ input, onClick, onBorrar, onCambiarSigno, onOperacion }) => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="calculadora col-12 col-sm-8 col-md-6 col-lg-4">
        <div className="display">
          <input type="text" value={input} readOnly />
        </div>
        <div className="botones">
          <button onClick={onBorrar} className="btn btn-light">AC</button>
          <button onClick={onCambiarSigno} className="btn btn-light">+/-</button>
          <button onClick={() => onClick("%")} className="btn btn-light">%</button>
          <button onClick={() => onClick("/")} className="btn operador">÷</button>
          <button onClick={() => onClick("7")} className="btn btn-light">7</button>
          <button onClick={() => onClick("8")} className="btn btn-light">8</button>
          <button onClick={() => onClick("9")} className="btn btn-light">9</button>
          <button onClick={() => onClick("*")} className="btn operador">×</button>
          <button onClick={() => onClick("4")} className="btn btn-light">4</button>
          <button onClick={() => onClick("5")} className="btn btn-light">5</button>
          <button onClick={() => onClick("6")} className="btn btn-light">6</button>
          <button onClick={() => onClick("-")} className="btn operador">-</button>
          <button onClick={() => onClick("1")} className="btn btn-light">1</button>
          <button onClick={() => onClick("2")} className="btn btn-light">2</button>
          <button onClick={() => onClick("3")} className="btn btn-light">3</button>
          <button onClick={() => onClick("+")} className="btn operador">+</button>
          <button onClick={() => onClick("0")} className="btn btn-light cero">0</button>
          <button onClick={() => onClick(".")} className="btn btn-light">.</button>
          <button onClick={onOperacion} className="btn operador">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculadora;
