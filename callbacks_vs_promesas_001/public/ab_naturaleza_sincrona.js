console.log("Desde el ab_naturaleza_sincrona.JS del public");

const ab = document.getElementById("ab_naturaleza_sincrona");

const ab_todo = document.getElementById("ab_naturaleza_sincrona_todo");

ab.addEventListener("click", () => {
  console.clear();
  console.log("presionado ab_naturaleza_sincrona.js");
  ab_ejecutaSincronia();
});

ab_todo.addEventListener("click", () => {
  console.clear();
  console.log("presionado ab_naturaleza_sincrona_todo");
  aa_ejecutaAsincronia();
  ab_ejecutaSincronia();
});

function ab_ejecutaSincronia() {
  console.log("Función ab_ejecutaSincronia");
  console.log("inicia");
  console.time("LOOP TOOK");
  let total = 0;
  for (let index = 0; index < 500_000_000; index++) {
    total += index;
    //console.log(total)
  }
  console.timeEnd("LOOP TOOK");
  console.log(`Finalizó el loop, valor de total: ${total}\n`);
}
