import React from "react";
import { Card, ImgToy, StyleCards } from "./StyleCards";


const Cards = (props) => {
    const urlBase = "http://localhost:3000/"    
    
    const {products, updateMyChoice} = props
    

    const addProduct = (idProduct) => {
        const newChoice = products.find((product) =>{
            return(product.id === idProduct)
        })
        updateMyChoice(newChoice);
    }
    
    return(
        <StyleCards>
            {
                products.map((listProducts) => {
                    return( <Card key={listProducts.id}>
                                <ImgToy src={`${urlBase}${listProducts.path}`} />
                                <p>{listProducts.name}</p>
                                <p>  {listProducts.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </p>
                                <button onClick={()=>addProduct(listProducts.id)}>Comprar</button> 
                            </Card>
                    )
                })
            }

        </StyleCards>
    )
}
export default Cards