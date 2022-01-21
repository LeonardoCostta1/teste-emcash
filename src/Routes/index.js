import React from "react";

import {Switch, Route } from "react-router-dom";
import Retangulo from "../Components/Retangulo";
import Soma from "../Components/Soma";
import Triangulo from "../Components/Triangulo";

function Routes() {
  return (
      <Switch>
        <Route path="/retangulo">
          <Retangulo />
        </Route>
        <Route path="/soma">
          <Soma />
        </Route>
        <Route path="/">
          <Triangulo />
        </Route>
      </Switch>
  );
}

export default Routes;
