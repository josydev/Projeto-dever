import styled from "styled-components";

const SideNavBar = styled.section`
  width: 300px;
  background: #1a1a1a;
  display: flex;
  flex-direction: column;
  color: #ccc;
  height: 100%;
`;

const SideNavBarTop = styled.section`
  flex: 1;
`;

const SideNavBarTopProfile = styled.div`
  display: flex;
  align-itens: center;
  justify-content: center;
  padding: 15px;
`;

const ProfileIcon = styled.div`
  background: #f8cbad;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileTitle = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 10px;

  .icon {
    margin: 0 10px;
    font-size: 12px;
  }
`;

const SideNavBarTopSearch = styled.div`
  padding: 15px;
`;

const SearchBlock = styled.div`
  display: flex;
  align-itens: center;
  background: #404040;
  padding: 8px 10px;
  border-radius: 50px;

  .icon {
    font-size: 16px;
    margin: 5px;
  }

  input {
    color: #fff;
    margin-left: 10px;
    background: none;
    outline: none;
    border: none;
  }
`;

const SideNavBarTopCreateNote = styled.div`
  padding: 0 15px;
  color: #fff;
`;

const NoteButton = styled.div`
  background: #03a82d;
  padding: 8px 10px;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  .icon {
    font-size: 16px;
    margin: 5px;
  }
`;

const NoteTitle = styled.div`
  margin-left: 12px;
`;

const SideNavBarTopMenuItem = styled.div`
  margin-top: 10px;

  ul {
    li {
      a {
        display: flex;
        align-items: center;
        padding: 10px 18px;
        color: #ccc;
        text-decoration: none;

        .icon {
          font-size: 14px;
          margin-right: 8px;
        }

        &:hover {
          cursor: pointer;
          background: #404040;
        }

        &:active {
          background: #404040;
        }
      }
    }
  }
`;

const SideNavBarBottom = styled.div`
  padding: 8px 15px;
  border-top: 1px solid #555;
`;

const SideNavBarBottomNeedHelp = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;

  .icon {
    font-size: 14px;
    margin-right: 8px;
  }
`;

export {
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
};
