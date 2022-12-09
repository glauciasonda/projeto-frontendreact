import {StyleCarrinho, Card, ImgToy, Finalizacao, ButtonRemover, ButtonContinuar} from "./StyleCarrinho";


const  Carrinho = (props) => {
    const urlBase = "http://localhost:3000/"    
    const { myChoice, deleteMyChoice,  updatePage } = props

    let total = 0;



    const removeProduct = (product) => {
        deleteMyChoice(product)
    }

    const continuar = () => {      
        localStorage.clear();
        updatePage(0)
    }
    
    return(
       <> 
        <StyleCarrinho>
            { myChoice.map((listProducts) => {
                total += listProducts.amount * listProducts.price; 
                return(
                    <Card key={listProducts.id}>
                        <ImgToy src={`${urlBase}${listProducts.path}`} />
                        <p>{listProducts.name}</p>
                        <p>Quantidade: {listProducts.amount} </p>
                        <p> {(listProducts.amount * listProducts.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </p>
                        <ButtonRemover onClick={() => removeProduct(listProducts)}>Remover</ButtonRemover>
                    </Card>
                 )
            } )
            }
        </StyleCarrinho>
        <Finalizacao>
            <h2>Total:   {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h2>
            <ButtonContinuar onClick={()=>continuar()}>Finalizar Compra</ButtonContinuar>
            
        </Finalizacao>
      </>   
    )
}
export default Carrinho