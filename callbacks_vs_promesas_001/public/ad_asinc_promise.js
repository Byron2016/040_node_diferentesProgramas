// www.youtube.com/watch?v=a91rU4Jk1KU&list=PLAmcNbGd0fkNl-CleT_XxwGKDk1j00uUp&index=15
// 0.20.57
console.log("Desde el ad_asinc_promise.js del public");

const ad = document.getElementById("ad_asinc_promise");

ad.addEventListener("click", () => {
  console.clear();
  console.log("presionado ad_asinc_promise.js");
  ad_ejecutaSincronia();
});

const ad_makeRequest = (method, url) => {
  const promise = new Promise((resolve, reject) => {
    // Pasamos toda la lógica de la petición.
    const xhr = new XMLHttpRequest();
    // console.log("Inicio fetching: ", {response: xhr.response })
    xhr.open(method, url);
    xhr.responseType = "json";

    xhr.onload = () => {
      // console.log({xhr})
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        //reject(new Error(xhr.statusText));
        reject("error de petición: " + xhr.statusText);
      }
    };

    xhr.onerror = () => {
      reject(new Error("Network Error"));
    };
    xhr.send();
  }); //incorporado a js en el 2015

  return promise;
};

function ad_ejecutaSincronia() {
  console.log("Función ad_ejecutaSincronia");
  const baseURL = "https://jsonplaceholder.typicode.com";

  console.time("fetch took");
  const urlToCall = `${baseURL}/users/1`;
  const promise = ad_makeRequest("GET", urlToCall);

  console.log({ promise }); //no pending 26.27 //Estados son: pendig, fullfilled, Rejected
  console.log(promise); //pendig 26.27

  promise
    .then((res) => {
      console.log("salió bien", res);
      console.timeEnd("fetch took");
    })
    .catch((err) => {
      console.log("salió mal", err);
    })
    .finally(() => {
      console.log("Esto se ejecutaría SIEMPRE");
    });
}
