import React, { useEffect, useState } from "react";
import {Select, StyleSort} from "./StyleSort";


const Sort = (props) =>{
    
    const {products, updateProducts} = props

    const [ordem, setOrdem] = useState("");
  
    const sortProducts = (ordem) => {
        let listOrder = [ ...products]      
        
        switch(ordem) {
            case '1': 
                listOrder.sort((a,b)=>{
                if (a.price < b.price) return -1
                if (a.price > b.price) return 1
                    else return 0
             })
            break;

            case '2': 
                listOrder.sort((a,b)=>{
                if (a.price < b.price) return 1
                if (a.price > b.price) return -1
                    else return 0
             })
            break;

            case '3': 
                listOrder.sort((a,b)=>{
                if (a.name < b.name) return -1
                if (a.name > b.name) return 1
                    else return 0
             })
            break;

            case '4': 
                listOrder.sort((a,b)=>{
                if (a.name < b.name) return 1
                if (a.name > b.name) return -1
                    else return 0
             })
            break;
            
            default:             
        }
        updateProducts(listOrder)
       
    }

    useEffect(()=>{           
        sortProducts(ordem);
    }, [ordem])

    
    return(
        <StyleSort>
            
            <Select name="ordem" value={ordem} onChange={(e) => setOrdem(e.target.value)}  >
                <option value={""}>Ordenar por:  </option>
                <option value={1}>Menor Preço</option>
                <option value={2}>Maior Preço</option>
                <option value={3}>De A a Z</option>
                <option value={4}>De Z a A</option>
            </Select>

        </StyleSort>
    )

}
export default Sort