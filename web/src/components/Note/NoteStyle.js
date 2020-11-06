import styled from "styled-components";

const MainNote = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
`;

const NoteHeader = styled.section`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
  border-bottom: 1px solid #e6e6e6;
`;

const NoteHeaderDate = styled.div`
  font-size: 14px;
  color: #737373;
`;

const NoteHeaderActionBtn = styled.div`
  display: flex;
`;

const ActionBtn = styled.div`
  color: #737373;
  font-size: 14px;
  opacity: 0.6;
  margin: 0 10px;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const NoteBody = styled.section`
  flex: 1;
  padding: 20px;
`;

const NoteBodyHead = styled.div`
  input {
    padding: 10px;
    font-size: 30px;
    border: none;
    outline: none;
    width: 100%;
  }
`;

const NoteBodyContent = styled.div`
  textarea {
    width: 100%;
    height: 100px;
    padding: 10px;
    font-size: 16px;
    border: none;
    outline: none;
  }
`;

export {
  MainNote,
  NoteHeader,
  NoteHeaderDate,
  NoteHeaderActionBtn,
  ActionBtn,
  NoteBody,
  NoteBodyHead,
  NoteBodyContent,
};
