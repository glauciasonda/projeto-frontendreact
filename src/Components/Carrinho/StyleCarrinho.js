import styled from "styled-components";


export const StyleCarrinho = styled.div`
    width: 100%;
    height: 70%;
    overflow-y: auto;
    display: flex;
    flex-direction: colum;
    flex-wrap: wrap;
    justify-content: space-around;

    
`;

export const Card = styled.div`
    width: 80%;
    height: 60%;
    margin: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: whitne;
    color: #0A1432;
    background-color: white;
    border-radius: 15px;
    
`;

export const ButtonRemover = styled.button`
    width: 10%;
    height: 15%;
    border-radius: 5px;
    
`;

export const Finalizacao = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: baseline;
    margin-top: 50px;

`;

export const ButtonContinuar = styled.button`
    width: 20%;
    height: 30%;
    border-radius: 5px;
    margin-left: 30px;
    margin-right: 30px;
    background-color: #3aaaff;
    border: none;
    color: white;
    font-size: 1rem;
    
`;


export const ImgToy = styled.img`
    max-width:250px;
    max-height:200px;
    width: auto;
    height: auto;
`;

