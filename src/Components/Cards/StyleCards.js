import styled from "styled-components";

export const StyleCards = styled.div`
    
    display: flex;
    flex-direction: colum;
    justify-content: flex-start;
    flex-wrap: wrap;
    grid-area: Cards;
`;

export const Card = styled.div`
    width: 20rem;
    height: 20rem; 
    margin: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 15px;
    color: #0A1432;
    
`;

export const ImgToy = styled.img`
    max-width:250px;
    max-height:200px;
    width: auto;
    height: auto;`;
