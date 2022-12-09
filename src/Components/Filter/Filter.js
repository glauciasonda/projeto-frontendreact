import useForm from "../../Hook/useForm";
import { Form, Icone, Input, Lupa, StyleFilter } from "./StyleFilter";
import IconeLupa from "../../Imagem/Lupa.png"

const Filter = (props) => {

    const {products, updateProducts} = props
    const [form, onChangeForm] = useForm({min: "", max: ""});
           
    const handleClick = (event) => {
        event.preventDefault()   
        
        const  listFilter = products.filter((product)=>{
            console.log(product);
            if (form.max !== ""){
                return (product.price >= form.min && product.price <= form.max)
            } else {
                return(product.price >= form.min)
            }
        })
        updateProducts(listFilter)
      }

        
    return(
        <StyleFilter>
            <h4>Filtrar por intervalo de preço: </h4>
            <Form onSubmit={(e)=>handleClick(e)}>
            <p>De: </p>
                <Input name="min" 
                        required
                        type="number"
                        value={form.min} 
                        onChange={onChangeForm} 
                        placeholder="Minímo">
                </Input>
                <p>Até: </p>
                <Input name="max" 
                        type="number"
                        value={form.max} 
                        onChange={onChangeForm} 
                        placeholder="Máximo">
                </Input>
                <Lupa type="submit"><Icone src={IconeLupa}></Icone></Lupa>
            </Form>
            
        </StyleFilter>             
        
    )

}
export default Filter