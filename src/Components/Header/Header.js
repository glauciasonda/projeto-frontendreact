import React from "react";
import BarraPesquisa from "../Search/Search";
import { IconeCarrinho, Logo, StyleHeader } from "./StyleHeader";
import ImagemCarrinho from "../../Imagem/Carrinho.png"
import Astronauta from "../../Imagem/AstronautaLogo.jpg";
import Toys from  "../../Product/Toys.json"


const Header = (props) => {
    const { updateProducts, updatePage} = props;

    const refresh = () => {
        updatePage(0)
        updateProducts(Toys);
    }
    

    return(
        <StyleHeader>
            <Logo src={Astronauta} onClick={refresh}></Logo>
            <BarraPesquisa updateProducts={updateProducts} />
            <IconeCarrinho src={ImagemCarrinho} onClick={()=>updatePage(1)} ></IconeCarrinho>
                       
        </StyleHeader>
    )
}
export default Header