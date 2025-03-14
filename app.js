let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = []; 
let numeroMaximo = 1000;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroUsuario == numeroSecreto) {
        asignarTextoElemento('p',  `¡Felicidades! Has adivinado el numero secreto en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute ('disabled');
    }else{
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        }else{
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}


function limpiarCaja(){
    document.getElementById('valorUsuario').value = '';
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() *numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else{
    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}

function reiniciarJuego() {
    //limpiar el campo de texto
    limpiarCaja();
    //indicar mensaje de inicio
    //reiniciar el contador de intentos
    //generar un nuevo numero secreto
    valoresIniciales();
    //desactivar el boton de reiniciar
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

function valoresIniciales(){
asignarTextoElemento('h1', 'Juego de numero secreto');
asignarTextoElemento('p', `Ingresa un numero entre 1 y ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto();
intentos = 1;
}

valoresIniciales();
