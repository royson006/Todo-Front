const rodrigo = {
  nombre: "Rodrigo",
  apellido: "Lopez",
  edad: 28,
};

//const cumpleaños = persona => persona.edad++;

const cumpleaños = (persona) => ({
  ...persona,
  edad: persona.edad + 1,
});

cumpleaños(rodrigo);
