import React, { useState, useContext } from "react";
import { NotesContext } from "context/context";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faInfo,
  faPlus,
  faSearch,
  faStar,
  faStickyNote,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import {
  SideNavBar,
  SideNavBarTop,
  SideNavBarTopProfile,
  ProfileIcon,
  ProfileTitle,
  SideNavBarTopSearch,
  SearchBlock,
  SideNavBarTopCreateNote,
  NoteTitle,
  NoteButton,
  SideNavBarTopMenuItem,
  SideNavBarBottom,
  SideNavBarBottomNeedHelp,
} from "./SidenavbarStyle";

//ROTAS
import { NavLink, useHistory } from "react-router-dom";
import { postRequest } from "utils/apiRequests";
import { BASE_URL, CREATE_NOTE } from "utils/apiEndpoints";

const Sidenavbar = () => {
  const notesContext = useContext(NotesContext);
  const history = useHistory();
  const [error, setError] = useState(null);

  const handleCreateNote = async () => {
    const response = await postRequest(`${BASE_URL}${CREATE_NOTE}`);
    console.log(response);
    if (response.error) {
      setError(response.error);
      return false;
    }

    if (response._id) {
      notesContext.notesDispatch({
        type: "createNoteSuccess",
        payload: response,
      });
      history.push({
        pathname: `/all-notes/${response._id}`,
        note: response,
      });
    }
  };

  return (
    <SideNavBar>
      <SideNavBarTop>
        <SideNavBarTopProfile>
          <ProfileIcon>M</ProfileIcon>
          <ProfileTitle>
            Matheus Moreira
            <FontAwesomeIcon className="icon" icon={faAngleDown} />
          </ProfileTitle>
        </SideNavBarTopProfile>
        <SideNavBarTopSearch>
          <SearchBlock>
            <FontAwesomeIcon className="icon" icon={faSearch} />
            <input placeholder="Procure uma nota"></input>
          </SearchBlock>
        </SideNavBarTopSearch>
        <SideNavBarTopCreateNote>
          <NoteButton onClick={handleCreateNote}>
            <FontAwesomeIcon className="icon" icon={faPlus} />
            <NoteTitle>Nova Nota</NoteTitle>
          </NoteButton>
        </SideNavBarTopCreateNote>
        <SideNavBarTopMenuItem>
          <ul>
            <li>
              <NavLink to="/fav-1">
                <FontAwesomeIcon className="icon" icon={faStar} />
                Favorito
              </NavLink>
            </li>
            <li>
              <NavLink to="/all-notes">
                <FontAwesomeIcon className="icon" icon={faStickyNote} />
                Todas Anotações
              </NavLink>
            </li>
            <li>
              <NavLink to="/fav-2">
                <FontAwesomeIcon className="icon" icon={faStar} />
                Favorito
              </NavLink>
            </li>
            <li>
              <NavLink to="/fav-3">
                <FontAwesomeIcon className="icon" icon={faStar} />
                Favorito
              </NavLink>
            </li>
            <li>
              <NavLink to="/trash">
                <FontAwesomeIcon className="icon" icon={faTrash} />
                Lixeira
              </NavLink>
            </li>
          </ul>
        </SideNavBarTopMenuItem>
      </SideNavBarTop>
      <SideNavBarBottom>
        <SideNavBarBottomNeedHelp>
          <FontAwesomeIcon className="icon" icon={faInfo} />
          Clique aqui para mais info!
        </SideNavBarBottomNeedHelp>
      </SideNavBarBottom>
    </SideNavBar>
  );
};

export default Sidenavbar;
