// Evento de Rato
document.getElementById("clickArea").addEventListener("click", function() {
    document.getElementById("result").innerText = "Evento 'click' ativado!";
});

document.getElementById("dbclickArea").addEventListener("dblclick", function() {
    document.getElementById("result").innerText = "Evento 'dblclick' ativado!";
});

document.getElementById("mouseoverArea").addEventListener("mouseover", function() {
    document.getElementById("result").innerText = "Evento 'mouseover' ativado!";
});

document.getElementById("mouseoutArea").addEventListener("mouseout", function() {
    document.getElementById("result").innerText = "Evento 'mouseout' ativado!";
});

document.getElementById("mousemoveArea").addEventListener("mousemove", function() {
    document.getElementById("result").innerText = "Evento 'mousemove' ativado!";
});

// Evento de Teclado
document.getElementById("textInput").addEventListener("keydown", function() {
    document.getElementById("keyboardOutput").innerText = "Você pressionou uma tecla!";
});

document.getElementById("textInput").addEventListener("keyup", function() {
    document.getElementById("keyboardOutput").innerText = "Você soltou uma tecla!";
});

// Evento de Formulário
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();  // Impede o envio real do formulário
    const formInput = document.getElementById("formInput").value;
    document.getElementById("formOutput").innerText = "Formulário enviado com o nome: " + formInput;
});

document.getElementById("formInput").addEventListener("change", function() {
    document.getElementById("formOutput").innerText = "Campo alterado para: " + this.value;
});
