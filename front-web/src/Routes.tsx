import Orders from "./Orders";
import Home from "./Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";

function Routes() {
  return (
    <BrowserRouter>
     <Navbar />
      <Switch>
        <Route path="/orders">
          <Orders />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
