import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

// CALLBACKS
async function procesarEntradaDelUsuario(callback) {
  const rl = readline.createInterface({ input, output });
  const nombre = await rl.question("What's your name (CALLBACK)? ");
  rl.close();
  callback(nombre);
}

export default procesarEntradaDelUsuario;
