var botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    // extraindo informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);

    //cria a tr e td (lista)
    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);

    if(erros.length > 0 ){
       exibeMensagensDeErro(erros);
        return;
    }
    
    // adicionar o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
})

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }   

    return paciente

}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");


    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td
}

function validaPaciente(paciente) {

    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("DIGITE SEU NOME!");
    }

    if(!validaPeso(paciente.peso)){
        erros.push("PESO É INVÁLIDO!!");
    }

    if(!validaAltura(paciente.altura)) {
        erros.push("ALTURA É INVÁLIDA!!");
    }

    if(paciente.gordura.length == 0){
        erros.push("DIGITE O SEU PERCENTUAL DE GORDURA!");
    }

    if(paciente.peso.length == 0){
        erros.push("O PESO NÃO PODE FICAR EM BRANCO.")
    }

    if(paciente.altura.length == 0){
        erros.push("ALTURA NÃO PODE FICAR EM BRANCO.")
    }

    return erros;
}

