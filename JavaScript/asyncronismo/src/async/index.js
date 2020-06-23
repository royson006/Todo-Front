const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Ejecuto"), 3000)
      : reject(new Error("Algo fallo :("));
  });
};

const doSomething = async () => {
  const something = await doSomethingAsync();
  console.log(something);
};

console.log("Before 1");
doSomething();
console.log("After 1");

const anotherFunction = async () => {
  try {
    const something = await doSomething();
  } catch (err) {
    console.Error(err);
  }
};

console.log("Before");
anotherFunction();
console.log("After");
