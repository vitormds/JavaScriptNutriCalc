var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(){
    // evento para bloquear o funcionamento default (submit)
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);
    var pacienteTr = montarTr(paciente);
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