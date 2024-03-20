// Escribe una función que tome una cadena y devuelva una nueva cadena sin las vocales. 


function vocales(palabra) {
    nueva_palabra = '';
    for (let i = 0; i < palabra.length; i++) {
        let caracter = palabra[i];
        if(!"aeiou".includes(caracter)){
            nueva_palabra += caracter
        }
    }
    return nueva_palabra
}
let texto = "Carlos Garcia"
let sin_vocal = vocales(texto);
console.log(sin_vocal);