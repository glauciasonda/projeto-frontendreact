import styled from "styled-components";

export const StyleFilter = styled.div`
    display: flex;
    width: 90%;
    height: 10%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: baseline;
    flex-wrap: wrap;
    margin-right: 10px;
    margin-left: 10px;
    color: #0A1432;
    grid-area: Filtro;
    background-color: whitesmoke;
`;

export const Form = styled.form`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
    justify-content: space-around;
    align-items: baseline;
    margin-top: 20px;
    
`;
export const Input = styled.input`
     font-size: 0.9rem;
     width: 35%;
     height: 20%;
     border: none;
     background-color: white;
     padding: 1px; 
     border-radius: 10px;

`;
export const Lupa = styled.button`
    border: none;
    background-color: whitesmoke;

    :hover {
        filter: brightness(0.95);
    }

    :active{
        filter: brightness(1.1)
    }
    
`;

export const Icone = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 30%;
`;
