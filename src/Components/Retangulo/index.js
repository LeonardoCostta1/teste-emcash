import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./style.css";

function Retangulo() {
  const [base, setBase] = useState("");
  const [altura, setAltura] = useState("");
  const [datas, setData] = useState("");

  const cadastrarRetangulo = async () => {
    console.log(base)
    console.log(altura)
    if (!base || !altura) {
      toast.warn("Favor preencher todos os campos!");
    } else {
      const resquestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "base": base, "altura": altura })
      };
      await fetch("http://18.118.129.38/api/retangulos", resquestOptions)
        .then((response) => response.json)
        .then((data) => setData(data));
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
          onChange={(e) => setBase(parseInt(e.target.value))}
          placeholder='digite a "base" do Retangulo'
        />
        <input
          type="text"
          value={altura}
          onChange={(e) => setAltura(parseInt(e.target.value))}
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
