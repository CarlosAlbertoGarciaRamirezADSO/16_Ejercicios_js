// Crea una función de nos devuelva el elemento mayor de un arreglo de números. 

function mayornum() {
    let arreglo = ["5","8","15","3"];
    let mayor = 0;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > Number((mayor))) {
        mayor = arreglo[i];
        }
    }
    return mayor;
}
console.log(`El numero mayor de el arreglo es ${mayornum()}`);




