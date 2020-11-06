import React, { Fragment } from "react";
import {
  GridLayout,
  Header,
  Menu,
  Main,
  Footer,
} from "../../styles/GridContainer";
import Sidebar from "../../components/sidebar/index";
import Hamburguer from "../../components/hamburguer/index";

//Importação da rota
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="page-home">
      <GridLayout>
        <Header>a</Header>
        <Menu>
          <Hamburguer />
        </Menu>
        <Main>
          <h1>Hellou</h1>

          <Link to="/">Voltar para o login</Link>
        </Main>
        <Footer>d</Footer>
      </GridLayout>
    </div>
  );
};

export default Home;
