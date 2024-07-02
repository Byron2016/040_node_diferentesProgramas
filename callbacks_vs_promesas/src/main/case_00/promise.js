import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

// PROMISES
async function procesarEntradaDelUsuario_pro() {
  const rl = readline.createInterface({ input, output });
  const nombre = await rl.question("What's your last name (PROMISE)? ");
  rl.close();
  return Promise.resolve(nombre);
}

// procesarEntradaDelUsuario_pro().then((nombre) => saludar(nombre));

export default procesarEntradaDelUsuario_pro;
