import styled from "styled-components";

export const StyleMain = styled.main`
    width: 100%;
    height: 70%;
    overflow-y: auto;
    display: grid;
    grid-template-columns: 0.5fr 1fr 1fr;
    grid-template-rows: 0.5fr 1fr;
    grid-template-areas: '. . Sort'
                          'Filtro Cards Cards';  
`;
