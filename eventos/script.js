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
var elemento = document.getElementById('duploclick');

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

const elemento = document.getElementById('out');
 
elemento.addEventListener('mouseover', () =>
{
    /** Muda a cor do fundo e aumenta o tamanho */
    elemento.style.backgroundColor = '#2980b9';
    elemento.style.transform = 'scale(1.1)';
});

elemento.addEventListener('mouseout', () =>
{
    elemento.style.backgroundColor = '#3498db';
    elemento.style.transform = 'scale(1)';

});
