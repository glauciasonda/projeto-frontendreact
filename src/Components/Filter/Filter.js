import React, { useState } from "react";
import { Input, StyleFilter } from "./StyleFilter";

const Filter = () => {
    const [min, setMin] = useState("");
    const [max, setMax] = useState("");

    const onChangeMin = (event) => {
        setMin(event.target.value);
    }

    const onChangeMax = (event) => {
        setMax(event.target.value);
        
    }

        
    return(
        <StyleFilter>
            <h4>Filtrar por intervalo de preço: </h4>
            
                <p>De: </p>
                <Input value={min} onChange={(e)=>onChangeMin(e)} placeholder="Minímo"></Input>
                <p>Até: </p>
                <Input value={max} onChange={(e)=>onChangeMax(e)} placeholder="Máximo"></Input>

            
            
        </StyleFilter>             
        
            
            
        
    )

}
export default Filter