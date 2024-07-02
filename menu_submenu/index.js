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
  console.log(
    "1 = Show sub" +
      "\n" +
      "2 = Show other sub blabla..." +
      "\n" +
      "3 = Exit" +
      "\n\n" +
      "Choose number, then press ENTER:"
  );

  menuHandler = function (input) {
    switch (input) {
      case "1":
        showSub();
        break;
      case "2":
        showOtherSubBlaBla;
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
function showSub() {
  console.log(
    "1 = Do something bla bla" +
      "\n" +
      "2 = Go back to main" +
      "\n\n" +
      "Choose number, then press ENTER:"
  );

  menuHandler = function (input) {
    switch (input) {
      case "1":
        doSomethingBlaBla();
        break;
      case "2":
        showMain();
        break;
      default:
        showSub();
    }
  };
}

initialize();
