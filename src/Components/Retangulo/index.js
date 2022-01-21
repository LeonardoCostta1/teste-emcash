import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

import "./style.css";

function Retangulo() {
  const [base, setBase] = useState("");
  const [altura, setAltura] = useState("");
  // const [error, setError] = useState("");
  const cadastrarRetangulo = async () => {
    if (!base || !altura) {
      toast.warn("Favor preencher todos os campos!")
    } else {
      await fetch("http://18.219.90.227/api/retangulos", {
        method: "POST",
        body: JSON.stringify({
          base,
          altura
        })
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }
  };

  return (
    <div className="retangulo_wrapper">
      <ToastContainer />
      <div className="headline">Cadastre um Retangulo</div>
      <div className="retangulo_container">
        <input
          type="text"
          value={base}
          onChange={(e) => setBase(e.target.value)}
          placeholder='digite a "base" do Retangulo'
        />
        <input
          type="text"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          placeholder='digite a "altura" do Retangulo'
        />
        <button onClick={() => cadastrarRetangulo()}>
          cadastrar retangulo
        </button>
      </div>
    </div>
  );
}

export default Retangulo;
