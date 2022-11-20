var titulo = document.querySelector(".titulo");
titulo.textContent = "Júlio Nutricionista";

var paciente = document.querySelector("#pp");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura")
var altura = tdAltura.textContent;

var imc = peso / (altura * altura);

console.log(imc);
