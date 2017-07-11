
//EJERCICIO 1
function palindromo(txt) {
  var txt = (prompt("Ingrese un numero"));
  var centena = Math.floor(txt/100);
  var decena = Math.floor((txt%100)/10);
  var unidad = Math.floor((txt % 100)%10);

  if (centena == unidad){
    console.log("El numero es capicua");
  }
   else{
     console.log("El numero no es capicua");
  }
}

console.log(palindromo(100));

//EJERCICIO 2
function elevar(numero,exponente){
resultado=Math.pow(numero,exponente);
return resultado;
}

console.log(elevar(9,2));


//EJERCICIO 3
function contarLetra(cadena){
var cadena = ['murcielago', 'pato','caballo', 'zebra'];
var str = cadena.toString();
var C= "a";
var contador = 0;
for(var i =0; i< str.length; i++){
      if(str[i]==C){
      contador++
    }
  }
document.writeln(" * Las palabras tienen " +contador+ " letras "+C);
}
contarLetra();


//EJERCICIO 4
function contarPalabras(texto){
var texto= "El mundo es ancho y ajeno"
var array = texto.split(" ");
var resultado = array.length;
document.writeln(" * El texto tiene " +resultado+ " palabra(s)");
}
contarPalabras();


//EJERCICIO 5
function palabraLarga(cadena) {
  cadena=['Gato','Perro','Cocodrilo','leon'];
  var largo= 0;
 for(var i =0; i <cadena.length; i++) {
    if(cadena[largo].length<cadena[i].length)
      largo=i;
   }
   document.writeln(" * El tamaño mas largo de todas las palabras es de : " +cadena[largo].length + " y la palabra es: " +cadena[largo])
  }
 palabraLarga();


 EJERCICIO 6
function contarVocales(cadena){
cadena = ['ojo', 'mouse', 'lapiz'];
var contador = 0;
for (var i = 0; i < cadena.length; i++){
     var vocal = cadena[i];
    if( vocal.indexOf('a') >= 0 || vocal.indexOf ('e')>= 0|| vocal.indexOf('i')>= 0|| vocal.indexOf('o')>= 0|| vocal.indexOf('u')>= 0){ // busca cada una de la letras
      contador ++
    }
  }
  document.writeln(" * La cadena tiene: " +contador+ " vocales");
}
contarVocales();


//EJERCICIO 7
function sumatoriaImpares(n,m){
  var sum = 0;

  for (var i = n; i <= m ; i++){
    if (i % 2 != 0){
      sum += i;

    }
  }
  return sum;
}
console.log(sumatoriaImpares(1,7));


//EJERCICIO 8
function stringLargo(palabras){
  var longitud = 0;
  var palabraLarga = "";
  for(var i=0;i<palabras.length;i++){
    if (palabras[i].length > longitud){
      longitud = palabras[i].length;
      palabraLarga = palabras[i];
    }
  }
  return palabraLarga;
}
var palabras =["jirafa","mono","murcielago","rinoceronte"];


console.log("La palabra mas larga es:" + stringLargo(palabras));


//EJERCICIO 9
function invertir(cadena){
  var x =cadena.length - 1;
  var cadenaInvertida = "";    cadenaInvertida = cadenaInvertida + cadena[x];
    x--;
  }
  return cadenaInvertida;

}
 console.log(invertir("roma"));
