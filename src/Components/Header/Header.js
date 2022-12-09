import React from "react";
import BarraPesquisa from "../Search/Search";
import { IconeCarrinho, Logo, StyleHeader } from "./StyleHeader";
import Astronauta from "../../Imagem/AstronautaLogo.jpg";
import ImagemCarrinho from "../../Imagem/Carrinho.png"

import Toys from  "../../Product/Toys.json"

const Header = (props) => {
    const { updateProducts, updatePage} = props;
    

    return(
        <StyleHeader>
            <Logo src={Astronauta} onClick={()=>updateProducts(Toys)} ></Logo>
            <BarraPesquisa updateProducts={updateProducts} />
            <IconeCarrinho src={ImagemCarrinho} onClick={()=>updatePage(1)} ></IconeCarrinho>
                       
        </StyleHeader>
    )
}
export default Header