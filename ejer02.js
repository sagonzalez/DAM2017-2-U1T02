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

function letras(cad){
    return cad.replace(/ /g,"").length;
}

function palindromo(cad){
	cad = cad.replace(/ /g,"");
	let letras = cad.length;
	let temp = "";
	while(letras>=0){
		
		temp += cad.charAt(--letras);
	}

	if(cad === temp){
		return "Es Palindromo";
	}else{
		return "No es Palindromo";
	}
}

console.log("num de palabras: "+palabras("hola mundo mundo"));
console.log("num de vocales: "+vocales("aplicaciones"));
console.log("num de consonantes: "+consonantes("aplicaciones"));
console.log("letras sin espacios: "+letras("javascript y typescript"));
console.log("Es Palindromo? "+palindromo("luz azul"));
