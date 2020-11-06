import React, { useEffect, useState, useContext } from "react";
import { useLocation, useParams, useHistory } from "react-router-dom";
import { NotesContext } from "../../context/context";
import { deleteRequest, putRequest } from "../../utils/apiRequests";
import { BASE_URL, DELETE_NOTE, UPDATE_NOTE } from "../../utils/apiEndpoints";
import { noteFormatDate } from "../../utils/helpers";

import {
  faArchive,
  faBackward,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  MainNote,
  NoteHeader,
  NoteHeaderDate,
  NoteHeaderActionBtn,
  ActionBtn,
  NoteBody,
  NoteBodyHead,
  NoteBodyContent,
} from "./NoteStyle";

const Note = () => {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const notesContext = useContext(NotesContext);
  const [updatedAt, setUpdatedAt] = useState("");
  const [isArchive, setIsArchive] = useState(0);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (location.note) {
      setTitle(location.note.title);
      setDesc(location.note.desc);
      setUpdatedAt(location.note.updatedAt);
      setIsArchive(location.note.archive);
    }
  }, [location.note]);

  useEffect(() => {
    if (notesContext.notesState.length > 0) {
      const [selectednote] = notesContext.notesState.filter(
        (e) => e._id === params.id
      );
      if (selectednote) {
        setTitle(selectednote.title);
        setDesc(selectednote.desc);
        setUpdatedAt(selectednote.updatedAt);
        setIsArchive(selectednote.archive);
      }
    }
  }, [notesContext.notesState]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  const handleUpdateNote = async (key) => {
    let query = {};
    if (key == "title") {
      query["title"] = title;
    } else if (key == "desc") {
      query["desc"] = desc;
    }

    const response = await putRequest(
      `${BASE_URL}${UPDATE_NOTE}${params.id}`,
      query
    );
    if (response.error) {
      setError(response.error);
      return false;
    }

    notesContext.notesDispatch({
      type: "updateNoteSuccess",
      payload: response,
      id: params.id,
    });
  };

  const handleArchiveNote = async () => {
    let query = {
      archive: 1,
    };

    const response = await putRequest(
      `${BASE_URL}${UPDATE_NOTE}${params.id}`,
      query
    );

    if (response.error) {
      setError(response.error);
      return false;
    }

    notesContext.notesDispatch({ type: "archiveNoteSuccess", id: params.id });
    resetState();
    history.push(`/all-notes`);
  };

  const handleUnArchiveNote = async () => {
    let query = {
      archive: 0,
    };
    const response = await putRequest(
      `${BASE_URL}${UPDATE_NOTE}${params.id}`,
      query
    );
    if (response.error) {
      setError(response.error);
      return false;
    }

    notesContext.notesDispatch({ type: "archiveNoteSuccess", id: params.id });
    resetState();
    history.push(`/trash`);
  };

  const handleDeleteNote = async () => {
    const response = await deleteRequest(
      `${BASE_URL}${DELETE_NOTE}${params.id}`
    );
    if (response.error) {
      setError(response.error);
      return false;
    }
    notesContext.notesDispatch({ type: "deleteNoteSuccess", id: response });
    resetState();
    history.push("/trash");
  };

  const resetState = () => {
    setTitle("");
    setDesc("");
    setUpdatedAt("");
    setIsArchive(0);
    setError(null);
  };

  return (
    <MainNote>
      <NoteHeader>
        <NoteHeaderDate>
          Editada por ultimo em, {noteFormatDate(updatedAt)}
        </NoteHeaderDate>
        <NoteHeaderActionBtn>
          {!isArchive ? (
            <ActionBtn onClick={handleArchiveNote}>
              <FontAwesomeIcon icon={faArchive}></FontAwesomeIcon>
            </ActionBtn>
          ) : (
            <>
              <ActionBtn>
                <FontAwesomeIcon
                  icon={faBackward}
                  onClick={handleUnArchiveNote}
                ></FontAwesomeIcon>
              </ActionBtn>
              <ActionBtn onClick={handleDeleteNote}>
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
              </ActionBtn>
            </>
          )}
        </NoteHeaderActionBtn>
      </NoteHeader>
      <NoteBody>
        <NoteBodyHead>
          <input
            value={title}
            placeholder="Title"
            onChange={handleTitleChange}
            onBlur={() => handleUpdateNote("title")}
          ></input>
        </NoteBodyHead>
        <NoteBodyContent>
          <textarea
            value={desc}
            placeholder="Digite uma nota aqui..."
            onChange={handleDescChange}
            onBlur={() => handleUpdateNote("desc")}
          ></textarea>
        </NoteBodyContent>
      </NoteBody>
    </MainNote>
  );
};

export default Note;
