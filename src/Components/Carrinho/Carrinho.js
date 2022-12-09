import {StyleCarrinho, Card, ImgToy} from "./StyleCarrinho";


const  Carrinho = (props) => {
    const urlBase = "http://localhost:3000/"    
    const { myChoice, deleteMyChoice,  updatePage } = props

    const removeProduct = (product) => {
        deleteMyChoice(product)
    }

    const continuar = () => {      
        updatePage(0)
    }
    
    return(
        <StyleCarrinho>
            { myChoice.map((listProducts) => {
                return(
                    <Card key={listProducts.id}>
                        <ImgToy src={`${urlBase}${listProducts.path}`} />
                        <p>{listProducts.name}</p>
                        <p> Quantidade: {listProducts.amount}  {(listProducts.amount * listProducts.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </p>
                        <button onClick={() => removeProduct(listProducts)}>Remover XX </button>
                    </Card>
                 )
            } )
            }
            <button onClick={()=>continuar()} >continuar comprando</button>
        </StyleCarrinho>
        
    )
}
export default Carrinho