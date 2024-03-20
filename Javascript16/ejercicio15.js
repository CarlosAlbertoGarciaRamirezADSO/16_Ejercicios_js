function convertir(num) {
    if (num < 0 || num > 5) {
        console.error("NO pueden ser numeros mayores a 5 o menores a 0")
    }  
    const texto = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco'];
    return texto[num];  
    }
let numero = prompt("Ingrese el numero");
let valor = convertir(numero)
alert(valor)