const produtosContainer = document.getElementById("produtos-container");

function renderizarProdutos(){
produtos.forEach(produto => {
  const article = document.createElement("article");

  article.innerHTML = 
  `
            <img src="${produto.imagem}" alt="Imagem do ${produto.nome}" />
            <h3>${produto.nome}</h3>
            <p>Preço: €${produto.preco.toFixed(2)}</p>
            <button onclick="adicionarAoCesto(${produto.id})">Adicionar ao Cesto</button>
        `;
        produtosContainer.append(article);

  
});


const cestoContainer = document.getElementById("cesto-container");

function adicionarAoCesto(id) {
    const produto = produtos.find(p => p.id === id);
    if (produto) {
        const artigo = document.createElement("article");
        artigo.innerHTML = `
            <h3>${produto.nome}</h3>
            <p>Preço: €${produto.preco.toFixed(2)}</p>
        `;
        cestoContainer.appendChild(artigo);
    }
}
document.addEventListener("DOMContentLoaded", () => {
  renderizarProdutos();
});

}