import React from "react";
import { Container, GlobalStyle } from "./AppStyle";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
          <Header/>
          <Main/>
          <Footer/> 
        
      </Container>  
    </>
  );
}

export default App;
