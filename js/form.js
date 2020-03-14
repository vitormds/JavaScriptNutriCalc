var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(){
    // evento para bloquear o funcionamento default (submit)
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    // Extraindo informações do paciente
    var paciente = obtemPacienteDoFormulario(form);

    // criando a td e tr do paciente
    var pacienteTr = montarTr(paciente);
    
 
    if(!validaPaciente(paciente)){
        console.log("Paciente Inválido");
        return;
    }

    
    
    // adicionando o paciete na tabela
    var tabela = document.querySelector("#tabela-pacientes"); 
    tabela.appendChild(pacienteTr);
    form.reset();

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
function montarTr(paciente){
  // Cria a TR e TD do paciente
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");     
  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc")); 
  return pacienteTr;
}

function montaTd(dado, classe){
 var td = document.createElement("td");
 td.textContent = dado;
 td.classList.add(classe);
 return td;
}



function validaPaciente(paciente){

    if(validarPeso(paciente.peso)){
        return true;
    }else{
        return false;
    }
}