import React, { useState, useEffect } from "react";

import "./style.css";

function Soma() {
  const [resultado, setResultado] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://18.118.129.38/api/areatotal")
        .then((response) => response.json())
        .then((data) => data);

      setResultado(result);
    };
    fetchData();
  }, []);
  return (
    <div className="soma_wrapper">
      <div className="soma_container">
        <div className="headline">
          soma das áreas de todos os polígonos cadastrados
        </div>
        <div className="area_total">{resultado.areatotal}</div>
      </div>
    </div>
  );
}

export default Soma;
