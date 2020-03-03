var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
pacientes.forEach(paciente => {
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");


var pesoEhValido = true;
var alturaEhValida = true;

if (peso < 0 || peso >100){
    
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!"
    paciente.classList.add("paciente-invalido");
}

if (altura < 0 || altura > 3){
    
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida!"
    paciente.classList.add("paciente-invalido");
   
}

if(alturaEhValida && pesoEhValido){
var imc = peso / (altura * altura);
tdImc.textContent = imc;
}

});

function calcularImc(peso, altura){
    var imc = 0;
    imc = peso / (altura*altura);
    return imc.toFixed(2);
}

titulo.addEventListener("click", function(){
    console.log("Função anonima");
});


    


