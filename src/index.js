import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Details from "./pages/productDetails";
import Cart from './pages/cart'

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
