const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Jalo!");
    } else {
      reject("fallo :(");
    }
  });
};

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("Jalo con delay!");
      }, 2000);
    } else {
      const err = new Error("Algo fallo");
      reject(err);
    }
  });
};

/*
somethingWillHappen2()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

somethingWillHappen()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
*/
Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
