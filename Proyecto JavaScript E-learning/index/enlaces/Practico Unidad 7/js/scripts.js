alert("Solo se aceptan los datos de personas mayores de edad: ")
var añoActual = 2022;
var añoNacimiento= prompt("Indique su año de nacimiento: ", "");
var resultado= añoActual - parseInt(añoNacimiento);

var formulario = document.getElementById("formulario");

function comprobarEdad(){
    if(resultado >= 18){
        alert("Usted podrá rellenar el formulario, su edad es " +resultado+ " años.")
        validacion()
    }else{
        alert("La pagina no mostrará ningun contenido para usted ya que es menor de edad")
        document.write("<h1>No hay contenido disponible para personas menores de edad.</h1>")   
    }
}

function validacion(){
    document.formulario.addEventListener("invalid", validar, true);
    document.getElementById("enviar").addEventListener("click", enviar, false);
    document.formulario.addEventListener("input", tiempoReal, false)
}

function validar(e){
    var elemento = e.target
    elemento.style.background ="#FFDDDD"
}
function tiempoReal(e){
    elemento = e.target
    if(elemento.validity.valid){
        elemento.style.background = "#FFFFFF"
    }else{
        elemento.style.background ="#FFDDDD"
    }
}

function enviar(){
    var valido = document.formulario.checkValidity();
    if(valido){
        document.formulario.submit()
    }
}
window.addEventListener("load", comprobarEdad, false);
  
