var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
pacientes.forEach(paciente => {
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");


var pesoEhValido = validarPeso(peso);
var alturaEhValida = validarAltura(altura);

if (!pesoEhValido){   
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!"
    paciente.classList.add("paciente-invalido");
}
if (!alturaEhValida){
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida!"
    paciente.classList.add("paciente-invalido");
}

if(alturaEhValida && pesoEhValido){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);;
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
function validarPeso(peso){
    return peso < 0 || peso > 100 ?  false : true;
}
function validarAltura(altura){
    return altura < 0 || altura > 3 ? false : true; 
}


    


