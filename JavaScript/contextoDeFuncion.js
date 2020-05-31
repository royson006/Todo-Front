const rodrigo = {
  nombre: "Rodrigo",
  apellido: "Lopez",
  edad: 28,
};

const sara = {
  nombre: "Sarahy",
  apellido: "Ramirez",
  edad: 28,
};

function saludar(saludo = "hola") {
  console.log(`${saludo} mi nombre es ${this.nombre}`);
}

//Bind solo devuelve  las mima funcion en otro contexto
//Saludar(rodrigo)

//const saludaARodrigo=Saludar.bind(rodrigo)
//const saludaASarahy=Saludar.bind(sara)

//setTimeout(Saludar.bind(rodrigo,'hola goe'), 1000);

//COn el call podemos ejecutar la funcion al momento pero con otro contexto
console.log(saludar.call(rodrigo, "Hola goe"));

//El apply es similiar al call, pero los paametros los recibe en un array
console.log(saludar.apply(rodrigo, ["Hola goe"]));
