// • Genera un patrón de asteriscos en forma de pirámide

function asteriscos(num_asteriscos) {
  for (let i = 1; i <= num_asteriscos; i++) {
    let asterisco = '';
    for (let f = 1; f <= i; f++) {
      asterisco += '*';
    }
    console.log(asterisco);
  }
}
let numero = parseInt(prompt("Ingrese un número entero"));
let cantidad = asteriscos(numero);
