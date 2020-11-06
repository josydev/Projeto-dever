import  styled  from "styled-components";


export const GridLayout = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-areas: "aside header header"
                         "aside main main"
                         "footer footer footer";
    /*Column, primeira coluna altera o valor do aside*/
    grid-template-columns: 300px repeat(2,auto);
    grid-template-rows: auto 100vh auto;
    -webkit-display: grid;
    -webkit-grid-template-areas: "aside header header"
                         "aside main main"
                         "footer footer footer";
  
    -webkit-grid-template-columns: 300px repeat(2,auto);
    -webkit-grid-template-rows: auto 100vh auto;
    -moz-display: grid;
    -moz-grid-template-areas: "header header header"
                         "aside main main"
                         "footer footer footer";
  
    -moz-grid-template-columns: 300px repeat(2,auto);;
    -moz-grid-template-rows: auto 100vh auto;

    grid-gap:10px;

`;

export const Header = styled.header`
   grid-area: header;
  border: 1px solid blue;
`;

export const Menu = styled.aside`
   grid-area: aside;
    display: block;
    /*position: fixed;*/
    max-width: 100%;
    background-color: gray;
    /*box-shadow: 1px 3px 3px var(--cor-box-cinza);*/
    border-bottom-right-radius: 3px;
    overflow-y: auto;
`;

export const Main = styled.main`
  grid-area: main;
  border: 1px solid pink;
`;
export  const Footer = styled.footer`
  grid-area: footer;
  height: 4em;
  border: 1px solid yellow;
`;


