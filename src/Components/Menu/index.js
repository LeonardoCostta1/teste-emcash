import React from "react";

import { Link } from "react-router-dom";
import "./style.css";

function Menu() {
  return (
    <div className="menu_wrapper">
      <div className="menu_container">
        <div className="logo_container">emcash.</div>
        <div className="navigation_container">
          <Link to="/retangulo">
            <div>cadastrar retangulos</div>
          </Link>
          <Link to="/">
            <div>cadastrar triangulos</div>
          </Link>
        </div>
        <div className="result_button_container">
          <Link to="/soma">
            <button className="somaButton">soma das areas</button>
          </Link>

          <div class="hamburguer-bt">
            <div class="hamburguer-bt__stripe hamburguer-bt__stripe__top"></div>
            <div class="hamburguer-bt__stripe hamburguer-bt__stripe__middle"></div>
            <div class="hamburguer-bt__stripe hamburguer-bt__stripe__bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
