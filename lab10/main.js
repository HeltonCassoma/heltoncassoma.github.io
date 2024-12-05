//Interação com AJAX
fetch('https://deisishop.pythonanywhere.com/categories')
.then(response => response.json()) //Converte a resposta em JSON
.then(data => console.log(data)) //Manipula os dados
.catch(error => console.error('Erro:', error)); //Trata erros

//Verificar se a chave já está no localStorage
if(!localStorage.getItem('produtos-selecionados')) {

    //Se não existir, inicializar uma lista vazia
    localStorage.setItem('produtos-selecionados', JSON.stringify([]));
} 


document.addEventListener('DOMContentLoaded', () => carregarProdutos(produtos) )

function carregarProdutos(produtosArg) {
    const container = document.getElementById('produtos-container'); //o nó pai onde os artigos serão inseridos
produtosArg.forEach(produto => {
    const article = criarProduto(produto);
    container.append(article);
    const {id, title} = produto
    console.log(id, title);

});
}



function criarProduto(produto){
    //Criar o título
    const subtitle = document.createElement('h3');
    subtitle.textContent=produto.title;

    //Criar Imagem
    const imagem = document.createElement('img');
    imagem.src = produto.image; //URL da imagem
    imagem.alt = produto.title; //Texto alternativo

    //Criar a descrição
    const descricao = document.createElement('p');
    descricao.textContent = produto.description;

    //Criar preço
    const preco = document.createElement('p');
    preco.textContent = produto.price + " €"; 

    //criar botão
    const button = document.createElement('button');
    button.textContent = "+ Adicionar ao cesto";
    button.addEventListener('click', ()  => {
        adicionarAoCesto(produto); //Chama a função para adicionar ao cesto
        
    });

    //Criar o elemento article e adicionar os elementos criados
    const article = document.createElement('article');
    article.append(subtitle, imagem, descricao, preco, button);

 return article;
}
function adicionarAoCesto(produto) {
    // Recuperar a lista de produtos no localStorage
    const produtosSelecionados = JSON.parse(localStorage.getItem('produtos-selecionados')) || [];
    // Adicionar o novo produto à lista
    produtosSelecionados.push(produto);
    // Atualizar o localStorage
    localStorage.setItem('produtos-selecionados', JSON.stringify(produtosSelecionados));
    // Atualizar o cesto na interface
    atualizaCesto();
}
function atualizaCesto(){
    //Recuperar os produtos selecionados do localStorage
    const produtosSelecionados = JSON.parse(localStorage.getItem('produtos-selecionados')) || [];

    //Seleciona o container do cesto onde os artigos serão inseridos
    const containerCesto = document.getElementById('cesto-container');
    containerCesto.innerHTML= ''; //Limpa o conteúdo do cesto antes de inserir novamente

    //verifica se exitem produtos selecionados
    if(produtosSelecionados.length === 0){
        const mensagem = document.createElement('p');
        mensagem.textContent = 'O cesto está vazio \n';
        
        containerCesto.append(mensagem);
        return;
    }
    
    //Para cada produto na lista de produtos selecionados, cria um article
    produtosSelecionados.forEach(produto => {
        const article = criaProdutoCesto(produto); //Cria o artigo para cada produto
        containerCesto.append(article); //Insere o artigo no contêiner do cesto
    });
    
    // Calcular e exibir o preço total
    const total = produtosSelecionados.reduce((sum, produto) => sum + produto.price, 0);
    const totalElement = document.createElement('p');
    totalElement.textContent = `Custo toal: ${total.toFixed(2)}€`;
    containerCesto.append(totalElement);

}

//Função que cria um artigo para o produto no cesto
function criaProdutoCesto(produto){

    //Criar o título
    const subtitle = document.createElement('h3');
    subtitle.textContent = produto.title;

    //criar a imagem
    const imagem = document.createElement('img');
    imagem.src = produto.image;
    imagem.alt = produto.title;
    
    //Criar a descrição
    const descricao = document.createElement('p');
    descricao.textContent = produto.description;

    //criar o preço
    const preco = document.createElement('p');
    preco.textContent = produto.price + "€";

    //Criar botão "Remover"
    const removerButton = document.createElement('button');
    removerButton.textContent ="Remover do Cesto";
    removerButton.addEventListener('click', () => {
        removerDoCesto(produto);
    })

    //Criar o elemento article e adicionar os elementos criados
    const article = document.createElement('article');
    article.append(subtitle, imagem, descricao, preco, removerButton);

    return article;

}
function removerDoCesto(produto){
  //Recuperar a lista de produtos do LocalStorage
  const produtosSelecionados = JSON.parse(localStorage.getItem('produtos-selecionados')) || [];

  //Encontrar e remover o produto da lista
  const index = produtosSelecionados.findIndex(p => p.id === produto.id);
  if(index !== -1){
    produtosSelecionados.splice(index, 1); //Remove o produto pelo Índice
  }

  //Atualizar o localStorage com a nova lista
  localStorage.setItem('produtos-selecionados', JSON.stringify(produtosSelecionados));

  //Atualizar o cesto na inteface
  atualizaCesto();
}
async function carregarCategorias(){
    const categorySelect = document.getElementById('category-select');

    try{
        const response = await fetch('https://deisishop.pythonanywhere.com/categories');
        const categories = await response.json();

        //Adicionar opções ao <select>
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category.id; //ID da categoria
            option.textContent = category.name; //Nome da categoria
            categorySelect.append(option);
        });
    } catch (error){
        console.error('Erro ao carregar categorias:', error);
    }

}
document.getElementById('category-select').addEventListener('change', async (event)=>{
    const categoryId = event.target.value; //ID da categoriã selecionada
    console.log('categoria selecionada:', categoryId);

    try{
        //Fetch dos produtos filtrados ou todos
        const url = categoryId
        ? `https://deisishop.pythonanywhere.com/products?categories=${categoryId}` 
            : `https://deisishop.pythonanywhere.com/products`;


            const response = await fetch(url);
            const produtosFiltrados = await response.json();

            //Atualizar os produtos exibidos
            carregarProdutos(produtosFiltrados);
            console.log('Produtos filtrados:', produtosFiltrados);
    } catch (error){
        console.error('Erro ao filtrar produtos:', error);
    }
});

let todosProdutos = []; // Armazena todos os produtos

document.addEventListener('DOMContentLoaded', () => {
    carregarCategorias()// Preencher o select de categorias
    fetch('https://deisishop.pythonanywhere.com/products')
        .then(response => response.json())
        .then(data => {
            todosProdutos = data; // Salva os produtos na variável global
            carregarProdutos(todosProdutos); // Exibe todos os produtos inicialmente
        })
        .catch(error => console.error('Erro ao carregar produtos:', error));
});

// Evento de mudança na categoria
document.getElementById('category-select').addEventListener('change', (event) => {
    const categoryId = Number(event.target.value); // Obtém o ID da categoria selecionada
    console.log('Categoria selecionada (ID):', categoryId);

    // Filtra os produtos localmente
    const produtosFiltrados = categoryId === 1 // Categoria "Todas as Categorias"
        ? todosProdutos // Exibe todos
        : todosProdutos.filter(produto => produto.category_id === categoryId);

    console.log('Produtos filtrados:', produtosFiltrados);
    carregarProdutos(produtosFiltrados); // Atualiza os produtos exibidos
});


//Chama a função para atualizar o cesto quando a página carregar
document.addEventListener('DOMContentLoaded', atualizaCesto);