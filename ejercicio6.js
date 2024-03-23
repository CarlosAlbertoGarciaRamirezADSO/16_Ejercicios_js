// Crea una función de nos devuelva el elemento mayor de un arreglo de números.
function elemento() {
  let arreglo = [1, 2, 3, 4, 5, 6, 10, 6, 50, 10, 80, 1];
  let numero_mayor = 0;

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > numero_mayor) {
      numero_mayor = arreglo[i]
    }

  }
  return numero_mayor;
}
console.log(`El numero mayor de el arreglo es ${elemento()}`)
