alert("Bienvenido al sistema de cálculo de Iva !");

var monto = prompt("Ingrese el importe a calcular", "");
parseFloat(monto);

var importeTotal = monto * 1.21
var iva = importeTotal - monto

function mostrarTotal(){
    alert("El importe total, con iva incluído es de: " +importeTotal)
    impresion()
}
function impresion(){
    var titulo = document.createElement("h2")
    var contenido = document.createTextNode("El IVA a pagar es de: "+iva+ " pesos. El importe total a pagar es de: " +importeTotal+ " pesos." )
    titulo.appendChild(contenido)
    document.body.appendChild(titulo)
}


