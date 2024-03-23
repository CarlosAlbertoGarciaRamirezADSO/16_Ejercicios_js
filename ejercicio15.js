// Crea una función que convierta números del 0 al 5 en su representación textual, por
// ejemplo: “cero”, “uno”, “dos”, “tres” etc.

function textual(num) {
  if (num < 0 || num > 5) {
    alert("El numero debe ser menor que 5 y mayor que 0")
  } else {
    let texto = ["cero", "uno", "dos", "tres", "cuatro", "cinco"]
    return texto[num];
  }
}
let numero = prompt("Ingrese el numero");
let texto = textual(numero)
console.log(texto);
