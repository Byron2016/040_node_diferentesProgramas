const inquirer = require("inquirer");
require("colors");

const questions = [
  {
    type: "list",
    name: "opcion",
    message: "¿Qué desa hacer?",
    choices: ["opt1", "opt2", "opt3"],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("=================================".green);
  console.log("      SELECCIONE UNA OPCIÓN      ".green);
  console.log("=================================\n".green);

  // const opt = await inquirer.createPromptModule(questions);
  const opt = await inquirer.createPromptModule();
  opt(questions);

  return opt;
};

module.exports = {
  inquirerMenu,
};
