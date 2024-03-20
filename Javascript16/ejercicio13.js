// Crea una función que tome un conjunto de números y devuelva el inverso aditivo de cada 
// uno. Todo los positivos se devuelve negativo y todos los negativos se devuelve positivo.


function invertir(num) {

    let numeros =[];

    for (let i = 0; i < num.length; i++) {

        if (num[i] >=0) {
            numeros.push(-num[i]);
        }else{
            numeros.push(Math.abs(num[i]))
        }
    }
    return numeros;
}
let num = [1,-5,6,9,-10]
let numero_cambiado = invertir(num);
console.log(numero_cambiado)
