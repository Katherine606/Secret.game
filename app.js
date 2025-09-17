
let numeroMax = 10;
let numeroSecreto = 0;
let listaSorteada = [];
let intentos = 0;


console.log(numeroSecreto);
function asignarElemento(elemento, texto){

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof(numeroUsuario));
    console.log(numeroUsuario);
    console.log(numeroSecreto == numeroUsuario);
    console.log(intentos);
    

    if (numeroSecreto === numeroUsuario){
        asignarElemento ('p', `acertaste en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroSecreto > numeroUsuario){
            asignarElemento ('p', 'el numero secreto es mayor');
        } else {
            asignarElemento ('p', 'el numero secreto es menor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMax)+1;

    console.log(numeroGenerado);
    console.log(listaSorteada);

    if (listaSorteada.length == numeroMax){
    asignarElemento('p', 'ya se sorteo todo pe');

    } else{
        if (listaSorteada.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaSorteada.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

function condicionesIniciales() {
    asignarElemento('h1','Bienvenidoooo');
    asignarElemento('p','Ingrese el num del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

