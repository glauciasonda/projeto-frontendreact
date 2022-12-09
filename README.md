# projeto-frontendreact

# Como implementei os Requisitos:


1. Home
    # Clicando na imagem do Astronauta com o foguete, retorna-se para a página Home. 
    - Mostrando todos os produtos
        # Minha solução recupera os valores armazenados  em um arquivo JSON  e renderiza os cards através de uma função  MAP. A função map é chamda no 
        # componente CARDS. 
        
    - Deve haver alguma forma de ordenar os produtos por ordem crescente ou decrescente de preço (pode ser na home em si ou junto dos filtros)
        # O componente SORT é responsável por fazer a ordenação pelos seguintes critérios: Menor Preço, Maior Preço, De A a Z, De Z a A.  

    - Produtos:
        - Devem ter um botão que permita adicioná-los ao carrinho
            # O botão Comprar, implementado no componente CARD, realiza a chamada para a função addProduct. Esta função é responsável por adicionar um novo produto 
            # ao carrinho. Se o produto já estiver no carrinho,  apenas a sua quantidade é incrementada. 
        - Devem exibir o nome, preço e imagem em um card
            # Todas as informações estão no componente CARD.
2. Carrinho
    - Mostrar todos os produtos e quantidades adicionadas
        # Clicar na imagem do Carrinho para visualizar os produtos adicionados. Componente CARRINHO. 
        # Foi implementada funcionalidade que guarda e recupera informações do carrinho na localStorage. 
        
    - Capacidade de remover itens do carrinho
        # O botão Remover, implementado no componente CARRINHO, faz a chamada para função removeProduct. 
    - Mostrar o valor total do carrinho
        # O Totalizador é apresentado no canto inferior da página. 
3. Filtro
    - Por valor mínimo e máximo
        # O filtro de valor mínimo e máximo foi implementado no componente FILTER com a utilização de Custom Hook. 
    - Por nome do produto
        # a busca por nome foi implementada no componente Search

- JSX
- Componentes
- Props
- Estado
- Fluxo de dados no React
- Renderização de listas
- Renderização condicional
- localStorage


- Entregue o **link do repo** no [Formulário de entrega](https://forms.gle/S9XChPZravP3WdxL6) 
- Utilize o **surge** para fazer o deploy do seu projeto.

