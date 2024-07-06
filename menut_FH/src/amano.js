// https://www.youtube.com/watch?v=zPDqcOxwovA&list=PLCKuOXG0bPi2HgUouLZ0NMmvXrW4zYD7y&index=5
require("colors");

const { showMenu, pausa } = require("./helpers/mesages");
console.clear();

const main = async () => {
  let opt = "";

  do {
    opt = await showMenu();

    if (opt !== "0") {
      await pausa();
    } else process.exit();
  } while (opt !== "0");
};

main();
