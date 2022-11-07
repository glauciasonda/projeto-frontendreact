import React from "react";
import BarraPesquisa from "../Pesquisa/Pesquisa";
import { StyleHeader } from "./StyleHeader";

export default function Header(){
    return(
        <StyleHeader>
            
            <BarraPesquisa></BarraPesquisa>
        </StyleHeader>
    )
}