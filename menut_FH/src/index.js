// https://www.youtube.com/watch?v=zPDqcOxwovA&list=PLCKuOXG0bPi2HgUouLZ0NMmvXrW4zYD7y&index=5

//npm install --save inquirer@^8.0.0

require("colors");

const { inquirerMenu } = require("./helpers/inquirer");

console.clear();

const main = async () => {
  let opt = "";

  //do {
  opt = await inquirerMenu();
  //console.log({ opt });

  //if (opt !== "0") await pausa();
  //} while (opt !== "0");
};

main();
