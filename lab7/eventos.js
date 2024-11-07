const mensagem = document.getElementById('mensagem');

mensagem.addEventListener('mouseover', () => {
    mensagem.innerText = "1. Você nasceu para ser feliz, não te distraias! \n"
     + " Helton Cassoma"
    ;
}); 
mensagem.addEventListener('mouseleave', () =>{
    mensagem.innerText = "1. Passe por aqui!";
});
 
document.querySelector('#red').onclick = function() {
    document.querySelector("#pinta").style.color = "red";
};
document.querySelector('#green').onclick = function() {
    document.querySelector("#pinta").style.color = "green";
};
document.querySelector('#blue').onclick = function() {
    document.querySelector("#pinta").style.color = "blue";
};

document.querySelector("input").oninput = function () {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
   this.style.backgroundColor = randomColor;
    };


document.getElementById("fundo").onclick = function (){
    const cor = document.getElementById("texto").value;
    document.body.style.backgroundColor = cor;
};

let counter = 0;
function count(){
counter++;
document.querySelector('#lbConta').innerHTML = counter;
    
}

document.querySelector('#btConta').onclick= count;


