import React from "react";
import { StyleFooter, StyleImg } from "./StyleFooter";
import GitIcon from "../../Imagem/github-icon.png";

export default function Footer(){
    return(
        <StyleFooter>
            <h6>Feito por Gláucia Sonda para Labenu  </h6> 
            <p>&nbsp;</p>
            <a href="https://github.com/glauciasonda/projeto-frontendreact.git">
                <StyleImg src={GitIcon}>
                </StyleImg>
            </a>        
        </StyleFooter>
    )
}