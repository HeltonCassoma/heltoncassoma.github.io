const produtosContainer = document.getElementById('produtos_container');

function carregarProdutos(produtos){
produtosContainer.innerHTML = '';
  //Seleciona o elemento pai onde os artigos serão inseridos.
  const container = document.querySelector('#produtos_container');
       

  //Itera por cada produto no array
       produtos.forEach(produto => {
      //Cria o elemento  <article> para o produto atual
      const artigo = criarProduto(produto);
    //Adiciona o <article> criado no elemento pai
      container.append(artigo); // Aqui é onde o artigo entra no DOM
       });
}

function criarProduto(produtos){
    //Criação do elemento <article>
  const article = document.createElement('article');

  //Criando o título e adicionando ao <article>
  const titulo = document.createElement('h2');
  titulo.textContent = produtos.titulo; //Produto possui a chave "titulo"
  article.append(titulo);

  //Criando a imagem e adicionando ao <article>
  const imagem = document.createElement('img');
  imagem.src = produtos.imagem; //Produto possui a chave "imagem"
  imagem.alt = produtos.titulo; // Usando o título do produto como descrição da imagem
  article.append(imagem);

  //Descrição e adicionando ao <article>
  const descricao = document.createElement('p');
  descricao.textContent = produtos.descricao; // Produto possui a chave "descrição"
  article.append(descricao);

  const preco = document.createElement('p');
  preco.textContent = '';
  article.append(preco);

  //Retorna o <article>
return article}

document.addEventListener('DOMContentLoaded', () =>
    {
        carregarProdutos(produtos);

    
});