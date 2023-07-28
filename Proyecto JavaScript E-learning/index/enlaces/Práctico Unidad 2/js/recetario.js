alert("En TuEnsalada.com podrás compartir tu propia receta, especificando proporciones.")

var usuario = prompt("Cuál es tu nombre?", "")
var nombreensalada = prompt("En lenguaje coloquial, " + usuario + ", cómo llamarías a tu ensalada? Ej.\"La poderosa\" \"La única\" etc. Recuerda que la misma debe tener tres ingredientes !", "")

var ingrediente1 = prompt("Ingrese el primer ingrediente: ", "")
var ingrediente2 = prompt("Ingrese el segundo ingrediente: ", "")
var ingrediente3 = prompt("Ingrese el tercer ingrediente: ", "")

alert("A continuación indique el porcentaje de cada ingrediente en la ensalada, sin el signo % y con numeros enteros el resultado deberá sumar 100.")

var proporcion1 = prompt("Indique la proporción de " +ingrediente1+ "" )
var proporcion2 = prompt("Indique la proporción de " +ingrediente2+ "" )
var proporcion3 = prompt("Indique la proporción de " +ingrediente3+ "" )

var resultado = parseInt(proporcion1) + parseInt(proporcion2) + parseInt(proporcion3)

if (resultado == 100) {
    alert("Gracias por utilizar TuEnsalada.com")
}
else {
    alert("Las proporciones indicadas no suman 100%, por lo que podría mal interpretarse la información")
}

    

