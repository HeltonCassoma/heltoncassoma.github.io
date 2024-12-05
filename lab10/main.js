// Recupera as categorias e preenche o select
async function carregarCategorias() {
    const categorySelect = document.getElementById('category-select');

    try {
        const response = await fetch('https://deisishop.pythonanywhere.com/categories');
        const categories = await response.json();

        // Adicionar a opção "Todas as Categorias"
        const defaultOption = document.createElement('option');
        defaultOption.value = 1; // ID fictício para representar "Todas as Categorias"
        defaultOption.textContent = 'Todas as Categorias';
        categorySelect.append(defaultOption);

        // Adicionar categorias reais
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category.id; // ID da categoria
            option.textContent = category.name; // Nome da categoria
            categorySelect.append(option);
        });
    } catch (error) {
        console.error('Erro ao carregar categorias:', error);
    }
}

// Função para carregar os produtos
function carregarProdutos(produtosArg) {
    const container = document.getElementById('produtos-container');
    container.innerHTML = ''; // Limpa os produtos exibidos anteriormente

    produtosArg.forEach(produto => {
        const article = criarProduto(produto);
        container.append(article);
    });
}

// Função para criar um produto individual
function criarProduto(produto) {
    const subtitle = document.createElement('h3');
    subtitle.textContent = produto.title;

    const imagem = document.createElement('img');
    imagem.src = produto.image;
    imagem.alt = produto.title;

    const descricao = document.createElement('p');
    descricao.textContent = produto.description;

    const preco = document.createElement('p');
    preco.textContent = produto.price + ' €';

    const button = document.createElement('button');
    button.textContent = '+ Adicionar ao cesto';
    button.addEventListener('click', () => adicionarAoCesto(produto));

    const article = document.createElement('article');
    article.append(subtitle, imagem, descricao, preco, button);

    return article;
}

// Função para adicionar produto ao cesto
function adicionarAoCesto(produto) {
    const produtosSelecionados = JSON.parse(localStorage.getItem('produtos-selecionados')) || [];
    produtosSelecionados.push(produto);
    localStorage.setItem('produtos-selecionados', JSON.stringify(produtosSelecionados));
    atualizaCesto();
}

// Atualizar o cesto na interface
function atualizaCesto() {
    const produtosSelecionados = JSON.parse(localStorage.getItem('produtos-selecionados')) || [];
    const containerCesto = document.getElementById('cesto-container');
    containerCesto.innerHTML = '';

    if (produtosSelecionados.length === 0) {
        const mensagem = document.createElement('p');
        mensagem.textContent = 'O cesto está vazio';
        containerCesto.append(mensagem);
        return;
    }

    produtosSelecionados.forEach(produto => {
        const article = criaProdutoCesto(produto);
        containerCesto.append(article);
    });

    const total = produtosSelecionados.reduce((sum, produto) => sum + produto.price, 0);
    const totalElement = document.createElement('p');
    totalElement.textContent = `Custo total: ${total.toFixed(2)} €`;
    containerCesto.append(totalElement);
}

// Cria o artigo do produto no cesto
function criaProdutoCesto(produto) {
    const subtitle = document.createElement('h3');
    subtitle.textContent = produto.title;

    const imagem = document.createElement('img');
    imagem.src = produto.image;
    imagem.alt = produto.title;

    const descricao = document.createElement('p');
    descricao.textContent = produto.description;

    const preco = document.createElement('p');
    preco.textContent = produto.price + ' €';

    const removerButton = document.createElement('button');
    removerButton.textContent = 'Remover do Cesto';
    removerButton.addEventListener('click', () => removerDoCesto(produto));

    const article = document.createElement('article');
    article.append(subtitle, imagem, descricao, preco, removerButton);

    return article;
}

// Remover produto do cesto
function removerDoCesto(produto) {
    const produtosSelecionados = JSON.parse(localStorage.getItem('produtos-selecionados')) || [];
    const index = produtosSelecionados.findIndex(p => p.id === produto.id);
    if (index !== -1) {
        produtosSelecionados.splice(index, 1);
    }
    localStorage.setItem('produtos-selecionados', JSON.stringify(produtosSelecionados));
    atualizaCesto();
}

// Filtrar e ordenar produtos
function aplicarFiltros() {
    const categoryId = Number(document.getElementById('category-select').value);
    const order = document.getElementById('order-select').value;
    const searchTerm = document.getElementById('search-input').value.toLowerCase();

    let produtosFiltrados = categoryId === 1
        ? todosProdutos
        : todosProdutos.filter(produto => produto.category_id === categoryId);

    produtosFiltrados = produtosFiltrados.filter(produto =>
        produto.title.toLowerCase().includes(searchTerm)
    );

    produtosFiltrados.sort((a, b) => order === 'asc' ? a.price - b.price : b.price - a.price);

    carregarProdutos(produtosFiltrados);
}

// Variáveis globais e eventos
let todosProdutos = [];

document.addEventListener('DOMContentLoaded', () => {
    carregarCategorias();
    fetch('https://deisishop.pythonanywhere.com/products')
        .then(response => response.json())
        .then(data => {
            todosProdutos = data;
            carregarProdutos(todosProdutos.sort((a, b) => a.price - b.price));
        })
        .catch(error => console.error('Erro ao carregar produtos:', error));

    document.getElementById('category-select').addEventListener('change', aplicarFiltros);
    document.getElementById('order-select').addEventListener('change', aplicarFiltros);
    document.getElementById('search-input').addEventListener('input', aplicarFiltros);
    atualizaCesto();
});
