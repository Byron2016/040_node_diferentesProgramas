export function sayHi(name) {
  console.log("\n" + `---> Hi ${name}!` + "\n");
}

export function createTitleBoxO(title, maxLength, caracterToPrint) {
  let titleBorder = caracterToPrint.repeat(maxLength);

  const sideLength = (maxLength - title.length) / 2;

  let newTitle = "";
  newTitle = title.padStart(sideLength + title.length, " ");
  newTitle = newTitle.padEnd(maxLength, " ");

  console.log("\n");
  console.log(titleBorder + "\n");
  console.log(newTitle + "\n");
  console.log(titleBorder + "\n");
  console.log("\n");
}

// export default colors = {
//   // Add some color
//   RED: "e[31m",
//   GRN: "e[32m",
//   grn: "e[92m",
//   YLW: "e[33m",
//   DEF: "e[0m", // Default color and effects
//   BLD: "e[1m", // Bold\brighter
//   COF: "e[?25l", // Cursor Off
//   CON: "e[?25h", // Cursor On
// };

export function createTitleBox(title, maxLength, caracterToPrint) {
  let titleBorder = caracterToPrint.repeat(maxLength);

  const sideLength = (maxLength - title.length) / 2;

  let newTitle = "";
  newTitle = title.padStart(sideLength + title.length, " ");
  newTitle = newTitle.padEnd(maxLength, " ");

  console.log("\n");
  console.log(titleBorder + "\n");
  console.log(newTitle + "\n");
  console.log(titleBorder + "\n");
  console.log("\n");
}
