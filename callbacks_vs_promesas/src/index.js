import { sayHi, createTitleBox } from "./helpers/util.js";

let menuHandler;

// Initialize
function initialize() {
  showMain();
  process.stdin.setEncoding("utf8");
  process.stdin.on("readable", checkMenu);

  function checkMenu() {
    let input = process.stdin.read();
    if (input !== null) {
      menuHandler(input.trim());
    }
  }
}

// Main
function showMain() {
  console.log("\n" + "\x1b[33m Choose a number \x1b[0m" + "\n");
  console.log(
    "1 = Callback vs Promises" +
      "\n" +
      "2 = xxxxxxx" +
      "\n" +
      "3 = Exit" +
      "\n\n" +
      "Choose a number, then press ENTER:"
  );

  menuHandler = async function (input) {
    switch (input) {
      case "1":
        show_callback_promises_SubMenu();
        break;
      case "2":
        llama_promise();
        break;
      case "3":
        process.exit();
        break;
      default:
        showMain();
    }
  };
}

// Sub
function show_callback_promises_SubMenu() {
  console.log("\n" + "\x1b[33m Choose a number \x1b[0m" + "\n");
  console.log(
    "1 = Test callbacks" +
      "\n" +
      "2 = Test promesa" +
      "\n" +
      "3 = Go back to main menu" +
      "\n\n" +
      "Choose a number, then press ENTER:"
  );

  menuHandler = async function (input) {
    switch (input) {
      case "1":
        await use_callback();
        break;
      case "2":
        use_promise();
        break;
      case "3":
        showMain();
        break;
      default:
        show_callback_promises_SubMenu();
    }
  };
}

initialize();

async function use_callback() {
  try {
    // CALLBACKS
    createTitleBox("CALLBACK", 40, "-");

    const moduleCallBack = await import("./main/case_00/callback.js");

    await moduleCallBack.default(sayHi);
  } catch (err) {
    console.log(err);
  }
}

async function use_promise() {
  try {
    // PROMISES
    createTitleBox("PROMISES", 40, "-");

    const modulePromise = await import("./main/case_00/promise.js");

    modulePromise.default().then((nombre) => sayHi(nombre));
  } catch (err) {
    console.log(err);
  }
}
