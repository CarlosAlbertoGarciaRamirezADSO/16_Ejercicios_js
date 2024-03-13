// Crea una función que calcule la longitud de una palabra si es corta o si es larga. (palabras 
//cortas menores de 5 caracteres). 


function logitud(palabra) {
    return palabra.length;
}

let texto = "HOLA";
let cantidad_p= logitud(texto);

console.log("la cantidad es: ", cantidad_p)