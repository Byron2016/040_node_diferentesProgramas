//const dotenv = require("dotenv")
const config = require("./config");
const fs = require("node:fs");
const http = require("node:http");

const PORT = config.port;

console.clear();

function requestController(req, res) {
  const url = req.url;
  const method = req.method;
  console.log({ url, method });

  if (method == "GET" && url === "/") {
    res.setHeader("Content-type", "text/html; charset=utf-8");
    res.write("<h1>Hola mundo desde la página PRINCIPAL</h1>");
    res.end();
    return;
  }

  if (method == "GET" && url === "/archivo") {
    res.setHeader("Content-type", "text/html");
    fs.readFile("./public/index.html", (error, file) => {
      //Esta ejecución es asíncrona.
      if (error) {
        console.log("Hubo un error al leer el archivo");
      }
      res.write(file);
      res.end();
    });
    return;
  }

  if (method == "GET" && url === "/index.js") {
    //Esto se hace x q si no tiene, el servidor está tratando de traer
    // { url: '/index.js', method: 'GET' }
    // por eso se vuelve tedioso con http.

    res.setHeader("Content-type", "text/html");
    fs.readFile("./public/index.js", (error, file) => {
      //Esta ejecución es asíncrona.
      if (error) {
        console.log("Hubo un error al leer el archivo");
      }
      res.write(file);
      res.end();
    });
    return;
  }

  if (method == "GET" && url === "/about") {
    res.setHeader("Content-type", "text/html");
    fs.readFile("./public/about.html", (error, file) => {
      //Esta ejecución es asíncrona.
      if (error) {
        console.log("Hubo un error al leer el archivo");
      }
      res.write(file);
      res.end();
    });
    return;
  }

  res.setHeader("Context-type", "text/html", "charset=utf-8");
  res.write("<h1>Página no encontrada</h1>");
  res.end();
  return;
}

// Configurar nuestro servidor
const server = http.createServer(requestController);

server.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});
