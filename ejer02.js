/*
    +Verificar si es palindromo
    +Número de palabras en la cadena    (*_*)/
    +Número de letras (sin espacios)
    +Nuero de vocales                   (*_*)/
    +Número de consonantes              (*_*)/
*/

function palabras(cadena){
    return cadena.split(" ").length;
}
function vocales(cadena){
    var numVocales = 0;
    vaca = ["a","e","i","o","u"];
    for(i=0; i<cadena.length; i++){
        vaca.forEach(function(element2){
            if(cadena[i] == element2){
                numVocales++;
            }
        });
    }
    return numVocales;
}

function consonantes(cadena){
    var numConsonantes = 0;
    var vaca = "aeiou";
    for(i=0; i<cadena.length; i++){
        if(vaca.includes(cadena[i])){
            numConsonantes ++;
        }
    }
    return numConsonantes;
}

function letras(cad1){
    //Alan
}

function palindromo(cad){
    //Alan
}

console.log("num de palabras: "+palabras("maldita sea joder tio"));
console.log("num de vocales: "+vocales("maldita sea joder tio"));
console.log("num de consonantes: "+consonantes("maldita sea joder tio"));
//console.log("letras sin espacios: "+letras("maldita sea joder tio"));
