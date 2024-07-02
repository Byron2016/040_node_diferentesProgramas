// www.youtube.com/watch?v=frm0CHyeSbE
// 1.- node src/main/case_01/callback.js

const operation = (num1, num2, callback) => {
  return callback(num1, num2);
};

operation(1, 3, (a, b) => {
  console.log("--> ejecutando caso 1.");
  console.log(a + b);
});

// 2.- Hacer que sea async

const operation_async = (num1, num2, callback) => {
  return setTimeout(() => {
    callback(num1, num2);
  }, 500);
};

operation_async(2, 3, (a, b) => {
  console.log("--> ejecutando caso 2.");
  console.log(a + b);
});

// 3.- Hacer que sea async

const doAsyncStuffwithCallBack = (num1, num2, callback) => {
  console.log("--> ejecutando caso 3.");
  const resultado = num1 + num2;
  return setTimeout(() => {
    callback(resultado);
  }, 500);
};

doAsyncStuffwithCallBack(7, 3, (result) => {
  console.log("--> ejecutando caso 3. en el callback .");
  console.log(result);
});
