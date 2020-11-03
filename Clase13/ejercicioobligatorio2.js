
let listaNumeros = [11, 10, 9]

function crearTabla(numeros, limite) {
	document.write(`<h3>La tabla de multiplicar del ${numeros} es:</h3>`);
	for (let i = 1; i <= limite; i++) {
		document.write(`<p> ${numeros} x ${i} : ${numeros * i}</p>`);
	}
}

function mostrarTabla(lista ,limite) {
	lista.forEach(function(element){
		//console.log(element);
		crearTabla(element, limite)
	});
}

mostrarTabla(listaNumeros, 10);