// Escribe una función que genere de forma aleatoria un numero entre 1 y 10, y verifica si 
// este numero es par o impar.


function pares() {
    let numero_aleatorio = Math.floor(Math.random()*11);

    if(numero_aleatorio % 2 == 0){
        alert(`El numero ${numero_aleatorio} es par`)
    }else{
        alert(`El numero ${numero_aleatorio} es impar`)
    }
    return numero_aleatorio;
}
pares();