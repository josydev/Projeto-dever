import styled from "styled-components";

const MainNoteList = styled.section`
  height: 100%;
  width: 100px;
  max-width: 670px;
  min-width: 196px;
  background: #f8f8f8;
  border-right: 1px solid #e6e6e6;
  display: flex;
  flex-direction: column;
`;

const NoteListHeader = styled.section`
  padding: 5px 25px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: 100px;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
`;

const NoteListHeaderTitle = styled.div`
  width: 100%;
  flex: 1;

  h1 {
    margin: 15px 0 20px;
    font-weight: 500;
    font-size: 20px;
  }
`;

const NoteListHeaderSubHead = styled.section`
  width: 100%:
  margin: 5px;
  font-size: 14px;

`;

const NoteCount = styled.div``;

const NoteListBody = styled.section`
  flex: 1;
  overflow: auto;

  .empty-state {
    opacity: 0.3;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: lowercase;
    font-size: 14px;
  }
`;

const NoteCard = styled.section`
  height: 120px;
  padding: 20px 25px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border: 1px solid #e6e6e6;
  text-decoration: none;
`;

const NoteCardHead = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
  font-size: 14px;
`;

const NoteCardTitle = styled.div`
  width: 100%;
  color: #333;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const NoteCardDesc = styled.div`
  width: 100%;
  color: #737373;
  margin-top: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const NoteCardDate = styled.div`
  color: #4d4d4d;
  font-size: 13px;

  &:hover {
    cursor: pointer;
    background: #fff;
  }

  &:active {
    background: #fff;
  }
`;

export {
  MainNoteList,
  NoteListHeader,
  NoteListHeaderTitle,
  NoteListHeaderSubHead,
  NoteCount,
  NoteListBody,
  NoteCard,
  NoteCardHead,
  NoteCardTitle,
  NoteCardDesc,
  NoteCardDate,
};
