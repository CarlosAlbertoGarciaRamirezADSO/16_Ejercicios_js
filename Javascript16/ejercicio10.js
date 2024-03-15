// Obtén una serie de número y devuelve la suma de todos los números positivos, si no
// tenemos números positivos la sume debe devolver 0.

let numeros = parseInt(prompt("Ingrese la cantidad de numeros a sumar"));
let suma = 0;

function sumar() {
  for (let i = 0; i < numeros; i++) {
    let numero = parseInt(prompt("Ingrese el numero"));
    if (numero > 0) {
      suma += numero;
    }
    else {
      suma = 0;
    }
  }
}
sumar(numeros);
console.log(suma)
