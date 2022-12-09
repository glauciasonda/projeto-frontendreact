import React from "react";
import { StyleMain } from "./StyleMain";

import Cards from "../Cards/Cards";
import NoResults from "../NoResults/NoResults";
import Filter from "../Filter/Filter";
import Sort from "../Sort/Sort";

const  Main = (props) => {  
    const { products, updateProducts,  updateMyChoice }  = props;

    return(
        <StyleMain>
            <Sort products={products} updateProducts={updateProducts} />
            <Filter products={products} updateProducts={updateProducts} />
            
            {
                products.length === 0 ? <NoResults /> : <Cards products={products} updateMyChoice={updateMyChoice} />
            }
       </StyleMain>
    )
}
export default Main