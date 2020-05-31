//Ejemplo 1

/*
console.log('a')
//Esto se va a la cola de tareas, que se ejecuta hasta que acaba la ejecuión normal
setTimeout(()=>{
  console.log('b')
},'2000')
console.log('c')
*/

//Ejemplo 2

setTimeout(() => {
  console.log("d");
}, 2000);

for (let index = 0; index < 1000; index++) {
  console.log(index);
}
