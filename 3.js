//Dar la funcionalidad de sumar y restar a la calculadora, mostrando el resultado en el elemento con clase resultado. Si el resultado de la resta entrega un número negativo debes mostrar un 0 

//obtener los resultados del DOM
const btnSumar = document.querySelector("#btn-sumar");
const btnRestar = document.querySelector("#btn-restar");
const resultado = document.querySelector(".resultado");

//Agregar un evento click al botón de suma y resta
btnSumar.addEventListener("click", sumar);
btnRestar.addEventListener("click", restar);

//funcion sumar
function sumar() {
    let valor1 = parseInt(document.getElementById("valor1").value);
    let valor2 = parseInt(document.getElementById("valor2").value);
    let resultadoSuma = valor1 + valor2;
    document.querySelector(".resultado").innerHTML = resultadoSuma;
}

//funcion restar
function restar() {
    let valor1 = parseInt(document.getElementById("valor1").value);
    let valor2 = parseInt(document.getElementById("valor2").value);
    let resultadoResta = valor1 - valor2;
    if (resultadoResta < 0) {
        resultadoResta = 0;
    }
    document.querySelector(".resultado").innerHTML = resultadoResta;
}

