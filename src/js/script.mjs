//Creamos las dos constantes que vamos a utilizar en la función.
const buttonMasUno = document.querySelector("button");
const inputCasilla = document.querySelector("input");

function suma (event) {
//Con el console.log veremos si el botón es funcional.
    console.log("Has hecho click, muy bien");

//A continuación desarrollamos la fórmula para incrementar en 1 el contador.
    let resultadoSuma = inputCasilla.value;
    resultadoSuma++;
    inputCasilla.value = resultadoSuma;

//Añadimos unas cuantas líneas por hacer bulto y amenizar el viaje.
    if (resultadoSuma === 11) {
        alert("Impresionante ¿verdad?");
    } if (resultadoSuma === 15) {
        alert("No hay nada más que ver.")
    }if (resultadoSuma === 20) {
        alert("En serio, ya está.")
    }if (resultadoSuma === 25) {
        alert("Gracias por venir.")
    }
}
//Por último añadimos la función al botón para que se ejecute correctamente y voilá ¡magia!
buttonMasUno.addEventListener("click", suma);