import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import StoreProvider from "./components/Store/Provider";
import RoutesPrivate from './components/Routes/Private/Private';

//Importanto as pages
import Home from "./pages/Home";
import Login from "./pages/Login";


//Criando conceito de SPA
const Routes = () => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/Login" exact component={Login} />
          <RoutesPrivate path="/Home" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
};

export default Routes;
