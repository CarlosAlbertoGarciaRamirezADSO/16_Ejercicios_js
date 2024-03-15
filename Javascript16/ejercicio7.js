// Crea una función que tome una cadena como parámetro y devuelva la cadena en orden
// inverso, por ejemplo, si la cadena de entrada es ‘Hola’, la función debería retornar ‘aloH’.


function invertir(palabra) {
  palabravolteada = '';

  for (let i = palabra.length - 1; i >= 0; i--) {

    palabravolteada += palabra[i]
  }
  return palabravolteada;
}
palabra = "arroz"

let imprimir = invertir(palabra);
console.log(imprimir)
