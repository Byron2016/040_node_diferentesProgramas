// Asincronía dada por el entorno => TIMER
// www.youtube.com/watch?v=a91rU4Jk1KU
let seconds = 2;
let date_time = new Date();
console.log(`Inicio: ${date_time}\n`);
setTimeout(() => {
  date_time = new Date();
  console.log(`Ya pasaron los ${seconds} segundos desde ${date_time}\n`);
}, seconds * 1000);
date_time = new Date();
console.log(`Esto se ejecuta al instante ${date_time}\n`);
