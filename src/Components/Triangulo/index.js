import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./style.css";

function Triangulo() {
  const [ladoA, setLadoA] = useState("");
  const [ladoB, setLadoB] = useState("");
  const [ladoC, setLadoC] = useState("");

  const cadastrarTriangulo = async () => {
    if (!ladoA || !ladoB || !ladoC) {
      toast.warn("Favor preencher todos os campos!");
    }
    await fetch("http://18.219.90.227/api/triangulos", {
      method: "POST",
      body: JSON.stringify({
        a: ladoA,
        b: ladoB,
        c: ladoC
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div className="triangulo_wrapper">
      <ToastContainer />
      <div className="headline">Cadastre um triangulo</div>
      <div className="triangulo_container">
        <input
          type="text"
          value={ladoA}
          onChange={(e) => setLadoA(e.target.value)}
          placeholder="digite o lado A"
        />
        <input
          type="text"
          value={ladoB}
          onChange={(e) => setLadoB(e.target.value)}
          placeholder="digite o lado B"
        />
        <input
          type="text"
          value={ladoC}
          onChange={(e) => setLadoC(e.target.value)}
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
