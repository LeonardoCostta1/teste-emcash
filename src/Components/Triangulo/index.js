import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./style.css";

function Triangulo() {
  const [ladoA, setLadoA] = useState("");
  const [ladoB, setLadoB] = useState("");
  const [ladoC, setLadoC] = useState("");
  const [datas, setData] = useState("");

  const cadastrarTriangulo = async () => {
    if (!ladoA || !ladoB || !ladoC) {
      toast.warn("Favor preencher todos os campos!");
    }else{
      const resquestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "a": ladoA, "b": ladoB,"c":ladoC })
      };
     await fetch("http://18.118.129.38/api/triangulos", resquestOptions)
        .then((response) => response.json)
        .then((data) => setData(data));
    }
  };

  return (
    <div className="triangulo_wrapper">
      <ToastContainer />
      <div className="headline">Cadastre um triangulo</div>
      <div className="triangulo_container">
        <input
          type="text"
          value={ladoA}
          onChange={(e) => setLadoA(parseInt(e.target.value))}
          placeholder="digite o lado A"
        />
        <input
          type="text"
          value={ladoB}
          onChange={(e) => setLadoB(parseInt(e.target.value))}
          placeholder="digite o lado B"
        />
        <input
          type="text"
          value={ladoC}
          onChange={(e) => setLadoC(parseInt(e.target.value))}
          placeholder="digite o lado C"
        />
        <button onClick={() => cadastrarTriangulo()}>
          cadastrar triangulo
        </button>
      </div>
    </div>
  );
}

export default Triangulo;
