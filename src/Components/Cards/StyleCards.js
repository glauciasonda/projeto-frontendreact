import styled from "styled-components";

export const StyleCards = styled.div`
    
    display: flex;
    flex-direction: colum;
    justify-content: space-evenly;
    flex-wrap: wrap;
    grid-area: Cards;
`;

export const Card = styled.div`
    width: 21rem;
    height: 21rem; 
    margin: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 15px;
    color: #0A1432;
    
`;

export const ButtonComprar = styled.button`
    background-color: #da0231;
    width: 8rem;
    height: 3rem;
    border: none;
    border-radius: 10px;
    color: white;
    margin-top: 5px;
`;

export const ImgToy = styled.img`
    max-width:250px;
    max-height:200px;
    width: auto;
    height: auto;`;
