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


document.querySelector('colorSelect').onchange = function(){
    document.querySelector('body').style.backgroundColor = this.value;
}


let counter = 0;
function count(){
counter++;
document.querySelector('#lbConta').innerHTML = counter;
    
}

document.querySelector('#btConta').onclick= count;


