import  React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { StyleStore } from "./StyleStore";
import Toys from  "../../Product/Toys.json"
import Carrinho from "../Carrinho/Carrinho";


const Store = () => {
    const [products, setProducts] = useState(Toys);
    const [myChoice, setMyChoice] = useState([]);
    const [page, setPage] = useState(0)
    
        
    const updateProducts = (newList) => {
        setProducts(newList)
    }

    const updateMyChoice = (product) => {
        const carrinho = [...myChoice];
        const position = carrinho.indexOf(product);
       
        if (position === -1){
            product.amount ++;
            carrinho.push(product)
        } else {
            carrinho[position].amount ++;
        }
        
        setMyChoice(carrinho)
        localStorage.setItem("meuCarrinho", JSON.stringify(carrinho));
    }


    const deleteMyChoice = (product) =>{
        const carrinho = myChoice.filter((element) => { 
            return product !== element
        })
        setMyChoice(carrinho);
        localStorage.setItem("meuCarrinho", JSON.stringify(carrinho)); 
    }

    const updatePage = (numPage) => {
        setPage(numPage)
    } 

    useEffect(() => {
        
        if(JSON.parse(localStorage.getItem("meuCarrinho")) !== null ){
            setMyChoice(JSON.parse(localStorage.getItem("meuCarrinho")))
        } 
    },[]); 

    
   
    return(
        <StyleStore>
            <Header updateProducts={updateProducts}  updatePage={updatePage}  />
            {page === 0 ? <Main products={products} updateProducts={updateProducts}  updateMyChoice={updateMyChoice}  /> : 
                          <Carrinho myChoice={myChoice} deleteMyChoice={deleteMyChoice} updatePage={updatePage}  />}
            <Footer />
        </StyleStore>
    )

}
export default Store