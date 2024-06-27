//forma mas extendida;
/*let parrafo = document.querySelector('p');
parrafo.innerHTML = "Indica un numero del 1 al 10";
*/

//simplificacion de la funcion generar numero secreto.
let secreto = 0;

//intentos de juego.
let intentos = 0;

let listaNumerosSorteados = [];
let numeroMaximo = 10;

//funcion generalizada para reutilizar
function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function condicionesIniciales() {
  //Se le pasan los parametros a asignar
  asignarTextoElemento("h1", "Juego del numero secreto");
  asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
  secreto = generarNumeroSecreto();
  intentos = 1;
}

condicionesIniciales();

function verificarIntentos() {
  let numeroDeUsuario = parseInt(
    document.getElementById("numeroUsuario").value
  );
  console.log(intentos);
  if (numeroDeUsuario === secreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el numero en ${intentos} ${intentos === 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroDeUsuario > secreto) {
      asignarTextoElemento("p", "El numero secreto es menor");
    } else {
      asignarTextoElemento("p", "El numero secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  let valorCaja = (document.querySelector("#numeroUsuario").value = "");
}

function reiniciarJuego() {
  //limpiar caja
  limpiarCaja();
  //inicializar mensajes
  //generar numero aleatorio
  //intentos
  condicionesIniciales();
  //desabilitar boton
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

//generar un numero aleatorio
function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * 10) + 1;
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  //Si ya sorteamos todos los numeros
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles");
  } else {
    //Si el numero generado esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

//funcion de alerta al hacer click.
function intentoDeUsuario() {
  alert("Click desde el boton");
}
