// Crea una función para calcular cuantas silabas tiene cada palabra, imprime el resultado
// en la consola.

function silabas(palabra) {

  let cantidad_sil = 0;;
  let minuscula = palabra.toLowerCase();
  for (let i = 0; i < palabra.length; i++) {
    let letra = minuscula[i]
    if ('aeiou'.includes(letra)) {
      cantidad_sil++;;
    }
  }
  console.log(`La palabra ${palabra} tiene ${cantidad_sil} silabas`)
}
let nombre = "que"
sila = silabas(nombre);

























// function silabas(palabra) {
//   // let vocales = ["a","e","i","o","u"];

//   let num_v = 0;
//   let ultima_l = false;

//   let minuscula = palabra.toLowerCase();
//   for (let i = 0; i < minuscula.length; i++) {
//     let letra = minuscula[i];

//     if ('aeiou'.includes(letra)) {
//       if (!ultima_l) {
//         num_v++;
//       }
//       ultima_l = true;
//     } else {
//       ultima_l = false;
//     }
//   }
//   console.log(`La palabra "${palabra}" tiene ${num_v} sílabas.`);
// }
// silabas("Carlos Garcia");
