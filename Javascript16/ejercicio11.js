// Implemente una función que sume dos números y devuelva su suma en binario, el
// número binario devuelto debe ser una cadena.



function convertir(n1, n2) {
  let dividendo = n1 + n2;
  let binario = (dividendo % 2).toString;
  for (; dividendo > 1;) {
    dividendo = parseInt(dividendo / 2)
    binario = (dividendo % 2) + (binario)
  }
  console.log(binario)
}
let resultado = convertir(100, 100)
