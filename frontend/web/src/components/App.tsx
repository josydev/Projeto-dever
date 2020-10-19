import React, { Fragment } from 'react';
import GlobalStyle from '../styles/globalStyle';

import { FormSection, BouncyDiv } from "../styles/loginStyles";

//Importando a nossa rota
import Routes from '../routes';


function App() {
  return (
   
    <Fragment>
    <GlobalStyle/>
    <Routes />
    
    {/* <BouncyDiv>
          <FormSection>
          </FormSection>
        </BouncyDiv> */}

    </Fragment>
   
  );
} 

export default App;
