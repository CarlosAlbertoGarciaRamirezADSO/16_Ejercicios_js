// • Genera un patrón de asteriscos en forma de pirámide


function piramide(numero) {

  for (let i = 1; i <= numero; i++) {
    let cantidad_Asteriscos = '';
    for (let f = 1; f <= i; f++) {
      cantidad_Asteriscos += "*";
    }
    console.log(cantidad_Asteriscos);

  }
}
let numero = parseInt(prompt("Ingrese el numero"));

let patron = piramide(numero);
console.log(patron);


































// function asteriscos(num_asteriscos) {
//   for (let i = 1; i <= num_asteriscos; i++) {
//     let asterisco = '';
//     for (let f = 1; f <= i; f++) {
//       asterisco += '*';
//     }
//     console.log(asterisco);
//   }
// }
// let numero = parseInt(prompt("Ingrese un número entero"));
// let cantidad = asteriscos(numero);
