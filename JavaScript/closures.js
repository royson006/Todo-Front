function crearSaludo(finalDeFrase) {
  return function (nombre) {
    console.log(`Hola ${nombre} ${finalDeFrase}`);
  };
}

const saludoArgentino = crearSaludo("che");
const saludoMexicano = crearSaludo("we");

saludoMexicano("rodrigo");
