import React, { useState } from "react";
import { Form, Icone, Input, Lupa } from "./StyleSearch";
import IconeLupa from "../../Imagem/Lupa.png"
import Toys from  "../../Product/Toys.json"

const  BarraPesquisa = (props) => {
    const { updateProducts } = props;
    const [inputSearch, setInputSearch] = useState("");
    const allProducts = [...Toys]

    
    const handleInputSearch = (event) => {
        setInputSearch(event.target.value);
    }

    const search = (event) =>{
        event.preventDefault();
        const listProducts = allProducts.filter((filterList) => {
                    return(filterList.name.toUpperCase().includes(inputSearch.toUpperCase()))
                })
        updateProducts(listProducts);
        setInputSearch("");
    }
        
    return(
        <>
        <Form>
            <Input  value={inputSearch} onChange={(e)=>handleInputSearch(e)} />         
            <Lupa onClick={(e)=>search(e)}><Icone src={IconeLupa}></Icone></Lupa>
         </Form>
        </>
    )
}
export default BarraPesquisa       