import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;

}`;

export const Container = styled.div`
    width: 100vw; 
    height: 100vh;
    background-color: whitesmoke; 
    display: flex;
    flex-direction: column;
`;