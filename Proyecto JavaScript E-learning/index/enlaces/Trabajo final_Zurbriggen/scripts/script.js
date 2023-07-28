function inicial() {
    document.formulario.addEventListener("input", controlar, false);
    document.getElementById("boton").addEventListener("click",enviar, false)
    var password = document.getElementById("password")
    var password2 = document.getElementById("password2")
    password.addEventListener("input", validar, true)
    password2.addEventListener("input", validar, true)

    function validar(){
        if (password.value != password2.value){
            password.style.background= "#FFDDDD"
            password2.style.background= "#FFDDDD"
        }else{
            password.style.background= "#FFFFFF"
            password2.style.background= "#FFFFFF"

        }
    }

    function controlar(e){
        var elemento= e.target;
        if (elemento.validity.valid){
            elemento.style.background="#FFFFFF"
        } 
        else{
            elemento.style.background="#FFDDDD"
            }
    }
}




function enviar(){
    var valido = document.formulario.checkValidity()
    if(valido && password.value == password2.value){        
        alert("Los datos se ingresaron correctamente")
        $("#titular2").fadeToggle(3000);
        $("#historieta").fadeToggle(3000);
        $("#instruccion").fadeToggle(3000);
        $("#formulario").fadeToggle(3000);
        juego()
        
    }
    else{
        alert("Ingrese los datos adecuadamente")
    }
}
function juego(){
    var nombre = document.getElementById("nombre")
    document.getElementById("titular").innerHTML= nombre.value+ " , disfrutá de la historieta !"
    cuadro1()
    }

function cuadro1(){
    //Nuevo Título
    
    var titulo = document.createElement("h2")
    var titulocontenido = document.createTextNode("Haz click en el recuadro para avanzar !")
    titulo.setAttribute("id", "titulo")
    titulo.appendChild(titulocontenido)
    document.body.appendChild(titulo)


    //Div contenedor de la imagen y título

    var contenedor1 = document.createElement("div")
    contenedor1.setAttribute("class","general")
    contenedor1.setAttribute("id", "contenedor1")
    
    var contenedor1contenido = document.createElement("h3")
    var contenedor1titulo = document.createTextNode("Viñeta 1")
    contenedor1contenido.appendChild(contenedor1titulo)
    contenedor1.appendChild(contenedor1contenido)

    var imagen1 = document.createElement("img")
    imagen1.setAttribute("src", "assets/imagen1.png")
    contenedor1.appendChild(imagen1)
    
    document.body.appendChild(contenedor1)
    contenedor1.addEventListener("click", cuadro2,false)
    }
function cuadro2(){
    contenedor1.setAttribute("hidden", true)
    var contenedor2 = document.createElement("div")
    contenedor2.setAttribute("class","general")
    contenedor2.setAttribute("id", "contenedor2")
        
    var contenedor2contenido = document.createElement("h3")
    var contenedor2titulo = document.createTextNode("Viñeta 2")
    contenedor2contenido.appendChild(contenedor2titulo)
    contenedor2.appendChild(contenedor2contenido)
    
    var imagen2 = document.createElement("img")
    imagen2.setAttribute("src", "assets/imagen2.png")
    contenedor2.appendChild(imagen2)
        
    document.body.appendChild(contenedor2)
    contenedor2.addEventListener("click", cuadro3,false)
    }

function cuadro3(){
    contenedor2.setAttribute("hidden", true)
    var contenedor3 = document.createElement("div")
    contenedor3.setAttribute("class","general")
    contenedor3.setAttribute("id", "contenedor3")
            
    var contenedor3contenido = document.createElement("h3")
    var contenedor3titulo = document.createTextNode("Viñeta 3")
    contenedor3contenido.appendChild(contenedor3titulo)
    contenedor3.appendChild(contenedor3contenido)
        
    var imagen3 = document.createElement("img")
    imagen3.setAttribute("src", "assets/imagen3.png")
    contenedor3.appendChild(imagen3)
            
    document.body.appendChild(contenedor3)
    contenedor3.addEventListener("click", cuadro4,false)
    }
function cuadro4(){
    contenedor3.setAttribute("hidden", true)
    var contenedor4 = document.createElement("div")
    contenedor4.setAttribute("class","general")
    contenedor4.setAttribute("id", "contenedor4")
                
    var contenedor4contenido = document.createElement("h3")
    var contenedor4titulo = document.createTextNode("Viñeta Final")
    contenedor4contenido.appendChild(contenedor4titulo)
    contenedor4.appendChild(contenedor4contenido)
            
    var imagen4 = document.createElement("img")
    imagen4.setAttribute("src", "assets/imagen4.png")
    contenedor4.appendChild(imagen4)
                
    document.body.appendChild(contenedor4)
    contenedor4.addEventListener("click", final, false)
    alert("Felicidades, clickeá en la viñeta final para finalizar!")
    }
function final(){
    alert("Has llegado al fin de la historia!")
    alert("TODO DESAPARECERÁ !!")
    desaparece()
}
//Ocultar con FadeOut
function desaparece() {
    $("#container").fadeToggle(3000);
    $("#contenedor4").fadeToggle(3000);
    $("#titulo").fadeToggle(3000);
};


window.addEventListener("load", inicial, false)
