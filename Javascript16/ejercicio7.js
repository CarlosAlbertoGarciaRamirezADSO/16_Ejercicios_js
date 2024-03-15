// Crea una función que tome una cadena como parámetro y devuelva la cadena en orden 
// inverso, por ejemplo, si la cadena de entrada es ‘Hola’, la función debería retornar ‘aloH’. 



function invertir(palabra) {
    let palabraInvertida = '';
    for (let i = palabra.length -1; i >= 0; i--){
        palabraInvertida += palabra[i];
    }
    return palabraInvertida;
}
palabra_normal = "Carlos"
let invertido = invertir(palabra_normal)
console.log(invertido)

