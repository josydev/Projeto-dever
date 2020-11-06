import React, { useContext, useReducer } from "react";
import StoreContext from "components/Store/Context";
import { NotesContext } from "../../context/context";
import NoteReducer from "../../reducer/NoteReducer";

import Sidenavbar from "../../components/Sidenavbar";
import NoteList from "../../components/NoteList";
import Note from "../../components/Note";

import "../../assets/App.css";

import {
  GridLayout,
  Header,
  Menu,
  Main,
  Footer,
} from "../.././styles/GridContainer";

//Importação da rota
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const initialState = [];

const PagesHome = () => {
  const { setToken } = useContext(StoreContext);
  const [notes, notesDispatch] = useReducer(NoteReducer, initialState);
  return (
    <Router>
      <NotesContext.Provider value={{ notesState: notes, notesDispatch }}>
        <div className="pages-home">
          <GridLayout>
            <Header>
              <button type="button" onClick={() => setToken(null)}>
                Sair
              </button>
            </Header>

            <Menu>
              <Sidenavbar />
            </Menu>

            <Main>
              <Switch>
                <Route path="/all-notes">
                  <NoteList title="Todas Anotações:" />
                  <Route path="/all-notes/:id">
                    <Note />
                  </Route>
                </Route>
                <Route path="/trash">
                  <NoteList title="Lixeira" />
                  <Route path="/trash/:id">
                    <Note />
                  </Route>
                </Route>
              </Switch>
            </Main>
            <Footer>d</Footer>
          </GridLayout>
        </div>
      </NotesContext.Provider>
    </Router>
  );
};

export default PagesHome;
