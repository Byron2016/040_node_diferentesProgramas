console.log("Desde el index.js del public");

// Obtener elementos del HTML y guardarlos en constantes
const a = document.querySelector("button");
console.log({ a });

a.addEventListener("click", () => {
  console.log("presionado");
  fetch("http://localhost:3000/users");
});
