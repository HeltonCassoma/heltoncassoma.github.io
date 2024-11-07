const mensagem = document.getElementById('sob');
document.querySelector('#red').onclick = function() {
    document.querySelector("#pinta").style.color = "red";
};
document.querySelector('#green').onclick = function() {
    document.querySelector("#pinta").style.color = "green";
};
document.querySelector('#blue').onclick = function() {
    document.querySelector("#pinta").style.color = "blue";
};

// script.js
// Seleciona o elemento pelo ID
let elemento = document.getElementById('duploclick');

// Adiciona um ouvinte de evento para o duplo clique
elemento.addEventListener('dblclick', function() {
    alert('Você nasceu para ser feliz, não te distraias!');
});


mensagem.addEventListener('mouseover', () => {
    mensagem.innerText = "3. Você nasceu para ser feliz, não te distraias! \n"
     + " Helton Cassoma"
    ;
}); 
mensagem.addEventListener('mouseleave', () =>{
    mensagem.innerText = "3. Passe o Mouse Aqui!";
});

let out = document.getElementById('out');
 
out.addEventListener('mouseover', () =>
{
    /** Muda a cor do fundo e aumenta o tamanho */
    out.style.backgroundColor = '#2980b9';
    out.style.transform = 'scale(1.1)';
});

out.addEventListener('mouseout', () =>
{
    out.style.backgroundColor = '#3498db';
    out.style.transform = 'scale(1)';

});


// script.js
// Seleciona o elemento pelo ID
let moveout = document.getElementById('move');

// Adiciona um ouvinte de evento para o movimento do mouse
moveout.addEventListener('mousemove', function(event) {
    // Calcula a posição do mouse em relação ao elemento
    let x = event.offsetX;
    let y = event.offsetY;

    // Exibe as coordenadas do mouse dentro do elemento
    moveout.textContent = `Posição: (${x}, ${y})`;

    // Altera a cor de fundo dinamicamente com base na posição do mouse
    moveout.style.backgroundColor = `rgb(${x % 255}, ${y % 255}, ${(x + y) % 255})`;
});

// Adiciona um ouvinte de evento para restaurar o texto quando o mouse sai do elemento
    moveout.addEventListener('mouseout', function() {
    moveout.textContent = '5. Passe o mouse aqui!';
    moveout.style.backgroundColor = '#3498db';
});

// script.js
// Seleciona o elemento pelo ID
let teclado = document.getElementById('tecladown');

// Adiciona um ouvinte de evento para o keydown no documento
document.addEventListener('keydown', function(event) {
    // Verifica qual tecla foi pressionada
    let tecla= event.key;

    // Exibe a tecla pressionada no elemento
    teclado.textContent = `Você pressionou: ${tecla}`;

    // Altera a cor do elemento com base na tecla pressionada
    if (tecla === 'a' || tecla === 'A') {
        teclado.style.backgroundColor = '#e74c3c'; // Vermelho para 'A'
    } else if (tecla === 's' || tecla === 'S') {
        teclado.style.backgroundColor = '#2ecc71'; // Verde para 'S'
    } else if (tecla === 'd' || tecla === 'D') {
        teclado.style.backgroundColor = '#f1c40f'; // Amarelo para 'D'
    } else {
        teclado.style.backgroundColor = '#3498db'; // Azul para outras teclas
    }
});

let teclado2 = document.getElementById('teclaup');

document.addEventListener('keydown', function(event){
    let tecla2 = event.key;
    teclado2.textContent = `Tecla pressionada: ${tecla2}`;
// Muda a cor do fundo ao pressionar certas teclas
if (tecla2 === 'a' || tecla2 === 'A') {
    teclado2.style.backgroundColor = '#FFFF00'; 
} else if (tecla2 === 's' || tecla2 === 'S') {
    teclado2.style.backgroundColor = '#808080'; 
} else if (tecla2 === 'd' || tecla2 === 'D') {
    teclado2.style.backgroundColor = '#800080'; 
} else {
    teclado2.style.backgroundColor = '#FFA500'; 
}
});

document.addEventListener('keyup', function(event) {
    let tecla2 = event.key;
    teclado2.textContent = `Você soltou a tecla: ${tecla2}`;
    
    // Restaura a cor original quando a tecla é solta
    teclado2.style.backgroundColor = '#3498db';
});


// Seleciona os campos do formulário
let campoNome = document.getElementById('Nome');
let campoEmail = document.getElementById('Email');
let formulario = document.getElementById('form1');

// Adiciona o ouvinte de evento 'change' aos campos
campoNome.addEventListener('change', function() {
    console.log('O nome foi alterado para: ' + campoNome.value);
});

campoEmail.addEventListener('change', function() {
    console.log('O e-mail foi alterado para: ' + campoEmail.value);
});

// Adiciona o ouvinte de evento 'submit' para interceptar o envio do formulário
formulario.addEventListener('submit', function(event) {
    // Previne o envio do formulário para poder validar os dados
    event.preventDefault();

    // Exemplo de validação (simples)
    let nome1 = campoNome.value;
    let email1 = campoEmail.value;

    if (!nome1 || !email1) {
        alert('Por favor, preencha todos os campos.');
    } else {
        alert('Formulário enviado com sucesso!');
        // Aqui você pode enviar o formulário ou fazer outras ações
        // formulário.submit(); // Enviar o formulário manualmente, se necessário
    }
});
