import React from "react";
import { Form, Icone, Input, Lupa } from "./StylePesquisa";
import IconeLupa from "../../Imagem/Lupa.png"


export default function BarraPesquisa(){
    return(
        <>
        <Form>
            <Input>
            </Input>
            <Lupa><Icone src={IconeLupa}></Icone></Lupa>
            
            
         </Form>
        </>
    )
}       