var letras = ['T', 'R', 'W', 'I', 'U', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'A', 'O'];

var numero = prompt("Ingrese un número del 0 al 25: ", "");
if(numero >=0 && numero <= 25){
    alert("El número indicado es correcto")
    }
    else{alert("Numero incorrecto, fin del programa")
}



if(numero >=0 && numero <= 25){
    var letra = prompt("Ingrese una letra: ", "");
    var seleccion = letras[numero];
    
    alert("Indicaste la letra: " +letra.toUpperCase()+ "." )
    alert("Al número indicado: " +numero+". Le corresponde la letra : " +seleccion+".") 
    document.write("<h2>Indicaste la letra: <h1 class='seleccion'>" +letra.toUpperCase()+ "</h1>.</h2>" )  
    document.write("<h2>Al número indicado: </h2><h1 class='seleccion'>" +numero+"</h1> <h2>le corresponde la letra : </h2><h1 class='seleccion'>" +seleccion+"</h1>")      
} 

if(letra.toUpperCase() == seleccion){
    alert("Has ganado. El número indicado, " +numero+ ", es el correcto para la letra elegida, "+letra.toUpperCase()+ ".")
    document.write("<h2>Has ganado. El número indicado: </h2><h1 class='seleccion'>" +numero+ "</h1> <h2> Es el correcto para la letra elegida</h2> <h1 class='seleccion'>"+letra.toUpperCase()+ "</h1>.")

}else{
    alert("Has perdido. El número indicado, " +numero+ ", no es el correcto para la letra elegida, "+letra.toUpperCase()+ " .")
    document.write("<h2>Has perdido. El número indicado: </h2> <h1 class='seleccion'>" +numero+ "</h1> <h2> No es el correcto para la letra elegida</h2> <h1 class='seleccion'>"+letra.toUpperCase()+ "</h1>")
}



