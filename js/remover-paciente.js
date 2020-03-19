var pacientes = document.querySelectorAll(".paciente");

// Remover sem atualizar //
// pacientes.forEach(function(paciente){
//  paciente.addEventListener("dblclick", function(){
//      this.remove();
//  });
// });

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
    // var alvoEvento = event.target;
    // var paidoAlvo = alvoEvento.parentNode; // TR = paciente = remover
    // paidoAlvo.remove();
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove(); // redzindo código
    }, 500);
    


});