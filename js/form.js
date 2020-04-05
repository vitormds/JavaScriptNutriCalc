var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(){
    // evento para bloquear o funcionamento default (submit)
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    // Extraindo informações do paciente
    var paciente = obtemPacienteDoFormulario(form);

    
 
    var erros = validaPaciente(paciente);
    if(erros.length >  0){
        exibeMensagensDeErro(erros);
        return;
    }
 
    adicionarPacientenaTabela(paciente);
    form.reset();
    var ul = document.querySelector("#messagens-erro"); 
    ul.innerHTML = "";

});

function adicionarPacientenaTabela(paciente){
    // criando a td e tr do paciente
    var pacienteTr = montarTr(paciente);
       // adicionando o paciete na tabela
    var tabela = document.querySelector("#tabela-pacientes"); 
    tabela.appendChild(pacienteTr);
}
function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#messagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li); 
    });
};
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
 var erros = [];
 
    if(paciente.nome.length == 0){
        erros.push("Nome não pode ser branco");
    }
    if(!validarPeso(paciente.peso)) erros.push("O peso é inválido");
    if(!validarAltura(paciente.altura)) erros.push("A altura é inválido");
   
    if(paciente.gordura.length == 0){
        erros.push("Gordura não pode ser branco");
    }
    if(paciente.peso.length == 0){
        erros.push("Peso não pode ser branco");
    }
    if(paciente.altura.length == 0){
        erros.push("Altura não pode ser branco");
    }
   

    return erros;
}


       
       

   