/*Clase 1
        console.log('Hola mundo JS');
        var nombre,apellido;
        nombre='Rodrigo';
        apellido='Lopez';
        console.log(`Hola ${nombre}`);
        */
/*Clase 2 String
        var nombre='Rodrigo';
        var apellido='Lopez';
        nombre.toUpperCase();
        apellido.toLocaleLowerCase();
        console.log(`Hola ${nombre} ${apellido}`);
        console.log(nombre.charAt(0)); //Primer caracter de una cadena
        console.log(`Tamaño nombre: ${nombre.length}`); //Primer caracter de una cadena
        console.log(`Substring: ${nombre.substr(0,2)}`); //Primer caracter de una cadena
        console.log(`Ultima Letra: ${nombre.charAt(nombre.length-1)}`); //Primer caracter de una cadena*/
/*Clase 3 NUMEROS
     
        var edad=29;
        edad+=1;
        var total=200.3*4;
        var totaltring=total.toFixed(2);
        var total2=parseFloat(toString);

        console(`Res ${total2}`);
*/
/*Clase 4 FUNCIONES
        var nombre ='Rodrigo',edad=29;

        function imprimirEdad(n,e){
            console.log(`Hola ${nombre} tienes ${edad}`)
        }

        imprimirEdad("Juan",30);*/
/*Clase 5 Scoop
        var nombre='Rodrigo';

        function mayusculaombre(n){
            n=nombre.toUpperCase()
            console.log(n)
        };
        mayusculaombre(nombre);
*/

/*Clase 6 Objetos 

var rodrigo={nombre:"Rodrigo",
             apellido:"Lopez",
             edad:29};
var sara={nombre:"Sara",
             apellido:"ramirez",
             edad:28};

function mayusculaombre({nombre,edad}){
    n=nombre.toUpperCase()
    
    console.log(n)
    console.log(edad)
};

mayusculaombre(rodrigo);
*/
/* Clase 7 Deestructuracion

var rodrigo={nombre:"Rodrigo",
             apellido:"Lopez",
             edad:29};

function mayusculaombre(rodrigo){
   var {nombre}=rodrigo;
   console.log(nombre);
};

mayusculaombre(rodrigo);
*/
/*Clase 8 Parametros por referencia 

var rodrigo={nombre:"Rodrigo",
             apellido:"Lopez",
             edad:29};

function cumpleaños(persona){
  return {...persona,
      edad:persona.edad+1
    }
}

cumpleaños(rodrigo);

*/

/*Clase 9 Comparacioes

var x=4,y='4';

var rodrigo={nombre:"Rodrigo",
             apellido:"Lopez",
             edad:29};

  function cumpleaños(persona){
  return {...persona
    }
}           

rodrigo!= de cumpleaños(rodrigo);

*/
/*Condicionales y booleanos

/*Clase 11 Estructuras de COntrol y Funciones*/

var rodrigo = { nombre: "Rodrigo", apellido: "Lopez", edad: 29 };

const MAYORIA_DE_EDAD = 18;

var esMayorDeEdada = function (persona) {
  return persona.edad >= MAYORIA_DE_EDAD;
};
/*CUando es un solo parametro, pueden o no ir los ()*/
var esMayorDeEdada = (persona) => {
  return persona.edad >= MAYORIA_DE_EDAD;
};

/*Si la funcion unicamente retorna un dato, se quitan las llaves y el return*/
var esMayorDeEdada = (persona) => persona.edad >= MAYORIA_DE_EDAD;

/*Usando la destructuracion se puede eviar solo un parametro*/
/*var esMayorDeEdada= ({edad}) => edad>=MAYORIA_DE_EDAD;*/

function imprimirSiEsMayor(persona) {
  if (esMayor(persona)) {
    console.log("Es Mayor de edad");
  } else {
    console.log("Es Menor de edad");
  }
}

function permitirAcceso(persona) {
  if (!esMayorDeEdada(rodrigo)) {
    console.log("ACCESO DENEGADO");
  }
}

var esMenorDeEdad = (persona) => !esMayorDeEdada(persona);

function imprimirSiEsMenor(persona) {
  if (esMenorDeEdad(persona)) {
    console.log("Es Menor de Edad");
  } else {
    console.log("Es Mayor de edad");
  }
}

/*Clase 12 Estructuras Ciclicas */
var rodrigo = { nombre: "Rodrigo", apellido: "Lopez", edad: 28, peso: 75 };
/*
console.log(`Rodrigo pesa ${rodrigo.peso}  al inicio del año`);

const aumentarDePeso=persona=> persona.peso+=0.2;
const adelgazarDePeso=persona=> persona.peso-=0.2;

for ( var i=1; i<=365;i++){
    var random=Math.random(0,1)
    if (random < 0.25){
        aumentarDePeso(rodrigo)
    }else if(random <0.50){
        adelgazarDePeso(rodrigo)
    }
}
*/

/*Clase 13 Sentencia while 
 var rodrigo= { nombre:"Rodrigo",
 apellido:"Lopez",
 edad:28,
 peso:75}

const META=rodrigo.peso-3;
const comeMucho = () => Math.random() < 0.2;
const haceEjercico = () => Math.random() < 0.7;
const aumentarDePeso=persona=> persona.peso+=0.2;
const adelgazarDePeso=persona=> persona.peso-=0.2;
var dias = 0

while(rodrigo.peso > META ){
if (comeMucho()) {
aumentarDePeso(rodrigo)
}
if (haceEjercico()) {
adelgazarDePeso(rodrigo)
}
dias +=1;
};

*/

/*Sentencia do While 

var contador = 0;

const llueve = () => Math.random() < 0.35;

do{
    contador++;
}while(!llueve());

console.log(`Fui a ver si llovia ${contador} ${contador==1? 'vez': 'veces'}`)
contador




*/

var sarahy = {
  nombre: "Sarahy",

  apellido: "Ramirez",

  altura: 1.6,

  dinero: 1950,
};

var marco = {
  nombre: "Marco",

  apellido: "Olan",

  altura: 1.7,

  dinero: 250,
};

var personas = [rodrigo, sarahy, marco];

/*Arrays







console.log(persona[0]['altura']);



for(var i=0; i < persona.length; i++){

  var person=persona[i];

  console.log(`${person.nombre} mide ${person.altura} mts`)

}

*/

/*Filtrar Arrays



const esAlta = persona => persona.altura >= 1.8

const esBaja = ({altura}) => altura < 1.8





var personasAltas=personas.filter(esAlta)

var personasBajas=personas.filter(esBaja)



console.log(personasAltas)

console.log(personasBajas)

*/

/*Map modifica cada elemento del array regresar objeto en arrow function

const pasarAlturaACms= persona =>({

  //persona.altura=persona.altura*100

  //persona.altura*=100

  //return {

  //  ...persona,

  //  altura: persona.altura*100

 // }

...persona,

 altura: persona.altura*100

})



var personasCms= personas.map(pasarAlturaACms)

console.log(personasCms)

console.log(personas)

*/

/*Reduce Arrays lo reduce a un valor unico



const reducer= (acum,{dinero}) =>  acum +dinero



var totalDinero = personas.reduce(reducer,0) //el reducer y como se inicializa

console.log(totalDinero)



*/

/*Objeto en  JS*



function Persona(nombre,apellido,altura) {

  this.nombre=nombre

  this.apellido=apellido

  this.altura=altura

}



Persona.prototype.saludar= function (){

  console.log(`Hola, me llado ${this.nombre} ${this.apellido}`)

}



Persona.prototype.soyAlto = function () {

  return this.altura>1.79

}



var rodrigo= new Persona('Rodrigo','Lopez', '1.80')



console.log(rodrigo.soyAlto())

*/

/*Herencia prototipal JS parcial */

/* Antigua forma de hacer herencia

Persona.prototype.saludar= function (){

  console.log(`Hola, me llado ${this.nombre} ${this.apellido}`)

}



Persona.prototype.soyAlto = function () {

  return this.altura>1.79

}

*/

/* Clases y herencia apartir de ECMA Script 2015

class Persona {

  constructor(nombre,apellido,altura){

    this.nombre=nombre

    this.apellido=apellido

    this.altura=altura

  }



  saludar(){

    console.log(`Hola, me llado ${this.nombre} ${this.apellido}`)

  }  

  soyAlto(){

    return this.altura>1.79

  }

}



class Desarrollador extends Persona {

  constructor(nombre,apellido,altura){

    super(nombre,apellido,altura)

  }



  saludar(){

    console.log(`Hola, me llado ${this.nombre} ${this.apellido} soy un desarrollador y mido ${this.altura}`)

  } 

}



var rodrigo= new Persona('Rodrigo','Lopez', '1.80')

var sarahy= new Desarrollador('Sarahy ','Ramirez', '1.50')

console.log(rodrigo.saludar())

console.log(sarahy.saludar())



*/

/*Asincronismo */

class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;

    this.apellido = apellido;

    this.altura = altura;
  }

  saludar(fn) {
    console.log(`Hola, me llado ${this.nombre} ${this.apellido}`);
  }

  soyAlto() {
    return this.altura > 1.79;
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura);
  }

  saludar(fn) {
    console.log(
      `Hola, me llado ${this.nombre} ${this.apellido} soy un desarrollador y mido ${this.altura}`
    );
    if (fn) {
      fn();
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen dia ${nombre} ${apellido}`);

  if (esDev) {
    console.log(`Saludos mi estimado colega desarrollador`);
  }
}

var rodrigo = new Persona("Rodrigo", "Lopez", "1.80");

var sarahy = new Desarrollador("Sarahy ", "Ramirez", "1.50");

console.log(rodrigo.saludar());

console.log(sarahy.saludar());
