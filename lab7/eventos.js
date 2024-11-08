const mensagem = document.getElementById('mensagem');

mensagem.addEventListener('mouseover', () => {
    mensagem.innerText = "1. Você nasceu para ser feliz, não te distraias! \n"
     + " Helton Cassoma"
    ;
}); 
mensagem.addEventListener('mouseleave', () =>{
    mensagem.innerText = "1. Passe por aqui!";
});
 
document.querySelectorAll('.color').forEach((button) =>  {
    button.addEventListener('click', () => {
        //Aqui pega a cor armazenada no atributo do botão
        let colorir = button.dataset.color;

        //Aqui aplica-se a cor no elemento <p>
        document.getElementById('pinta').style.color = colorir;
    });
});


/*document.querySelector('#green').onclick = function() {
    document.querySelector("#pinta").style.color = "green";
};
document.querySelector('#blue').onclick = function() {
    document.querySelector("#pinta").style.color = "blue";
}; */

document.querySelector("input").oninput = function () {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
   this.style.backgroundColor = randomColor;
    };


document.querySelector('#fundo').onclick = function () {
    const selectedColor = document.querySelector('#colorSelect').value;
    document.querySelector('body').style.backgroundColor = selectedColor;
};


// Se não existe a chave counter em localStorage, inicializamos com 0
if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0);
}

// Função count() que atualiza o valor do counter em localStorage
function count() {
    let counter = Number(localStorage.getItem('counter')); // Converte o valor para número
    counter++; // Incrementa
    document.querySelector('#lbConta').innerHTML = counter; // Exibe o valor atualizado
    localStorage.setItem('counter', counter); // Armazena o valor atualizado no localStorage
}

// Atualiza o elemento ao carregar a página
document.addEventListener("DOMContentLoaded", function() { // O DOMContentLoaded, garante que o JS só rode apoós o carregamento completo do HTML
    document.querySelector('#lbConta').textContent = localStorage.getItem('counter');
    document.querySelector('#btConta').onclick = count; // Define o botão para chamar a função count
});

// Seleciona os campos do formulário
let campoNome = document.getElementById('Nome');
let campoNumero = document.getElementById('Number');
let formulario = document.getElementById('form1');
let mensagemLabel = document.getElementById('texto');

// Adiciona o ouvinte de evento 'submit' para interceptar o envio do formulário
formulario.addEventListener('submit', function(event) {
    // Previne o envio do formulário para poder validar os dados
    event.preventDefault();

    // Exemplo de validação (simples)
    let nome1 = campoNome.value;
    let numero = campoNumero.value;

    if (!nome1 || !numero) {
        // Se os campos não estiverem preenchidos, exibe uma mensagem de erro
        mensagemLabel.textContent = 'Por favor, preencha todos os campos.';
        mensagemLabel.style.color = 'red';
        mensagemLabel.style.display = 'block'; // Torna a label visível
    } else {
        // Se os campos estiverem preenchidos, exibe a mensagem com o nome e a idade
        mensagemLabel.textContent = 'Olá, o '+nome1 + ' tem ' + numero + ' anos!';
        mensagemLabel.style.color = 'white'; // Opcional: muda a cor para indicar sucesso
        mensagemLabel.style.display = 'block'; // Torna a label visível
    }
});

let contador = 0;
function countAuto(){
contador++;
document.querySelector('#contaAuto').textContent = contador;

}
setInterval(countAuto, 1000);
