import '/lab9/produtos.js'

document.addEventListener('DOMContentLoaded', carregarProdutos(produtos) )

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
    preco.textContent = produto.price + " €"; //Formata para duas casas decimais

    //Criar o elemento article e adicionar os elementos criados
    const article = document.createElement('article');
    article.append(subtitle, imagem, descricao, preco);

 return article;
}


