var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(){
    // evento para bloquear o funcionamento default (submit)
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
   var paciente = obtemPacienteDoFormulario(form);
    

    // Cria a TR e TD do paciente
    var pacienteTr = document.createElement("tr");
        
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    //var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calcularImc(peso, altura);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd); 

    // adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes"); 
    tabela.appendChild(pacienteTr);


});

function obtemPacienteDoFormulario(form){
// Extraindo informações do paciente form
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    }
   return paciente;
}