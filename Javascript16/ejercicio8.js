// • Crea una función para validar un pin que acepte 4 o 6 caracteres de longitud, solo se
// aceptan números, la función debe devolver true si el pin es valido y false si no es válido.

function exprecion(contraseña) {
  regex = /^[\d]{4,6}$/;
}
let contraseña = "12345";
let resultado = exprecion(contraseña)
console.log(regex.test(contraseña));