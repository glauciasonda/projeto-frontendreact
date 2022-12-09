import styled from "styled-components";

export const Form = styled.form`
    width: 50%;
    height: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 5px solid whitesmoke;
    border-radius: 5px;
    background-color: whitesmoke;
    padding: 5px;
    margin-right: 10px;
`;

export const Input = styled.input`
     font-size: 1rem;
     width: 90%;
     height: 100%;
     border: none;
     background-color: whitesmoke;
     padding: 1px; 

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


