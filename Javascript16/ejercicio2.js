// Crea una función que tome un número como argumento y devuelva la cadena si el 
// numero es par o impar. 

function pares(numero1) {
    
    if(numero1 % 2 == 0){
        alert(`El numero ${numero1} es par`);
    }else{
        alert(`El numero ${numero1} es impar`);
    }
}
pares(13);