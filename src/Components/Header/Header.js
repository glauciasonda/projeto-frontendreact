import React from "react";
import BarraPesquisa from "../Pesquisa/Pesquisa";
import { Logo, StyleHeader } from "./StyleHeader";
import Astronauta from "../../Imagem/AstronautaLogo.jpg";
import Carrinho from "../Carrinho/Carrinho";

export default function Header(){
    return(
        <StyleHeader>
            <Logo src={Astronauta} ></Logo>
            <BarraPesquisa></BarraPesquisa>
            <Carrinho></Carrinho>
            
        </StyleHeader>
    )
}