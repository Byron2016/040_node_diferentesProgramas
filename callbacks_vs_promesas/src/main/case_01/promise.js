// www.youtube.com/watch?v=frm0CHyeSbE
// 1.- node src/main/case_01/promise.js

// 1.- Hacer que sea async

const doAsyncStuffwithPromises = (num1, num2) => {
  const resultado = num1 + num2;
  // return new Promise((resolve, reject) =>{
  //   // Promise recive como parámetro una función.
  //   // Esta función tiene 2 parámetros resolve y reject
  //   // resolve cuando todo va bien
  //   // reject llamamos cuando hay problema.
  // })
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(resultado);
    }, 500);
  });
};

doAsyncStuffwithPromises(7, 3).then((result) => {
  console.log("--> ejecutando caso 1. (Trabajando con async then)");
  console.log(result);
});

// Trabajando con async await
console.log("--> ejecutando caso 1. (Trabajando con async await)");
const result = await doAsyncStuffwithPromises(6, 1);
console.log(result);
