// Crea una función que reciba dos números como parámetros y devuelva el mayor de 
// ellos. 

function NumM(nu1,nu2) {
    if(nu1>nu2){
        return nu1;
    }else{
        return nu2;
    }
}
let numero_M = NumM(5,10);


alert(`El numero mayor es ${numero_M}`)