// www.youtube.com/watch?v=a91rU4Jk1KU&list=PLAmcNbGd0fkNl-CleT_XxwGKDk1j00uUp&index=15
// 0.20.57
console.log("Desde el ae_asinc_promise_fetch.js del public");

const ae = document.getElementById("ae_asinc_promise_fetch");
const ae_m = document.getElementById("ae_asinc_promise_fetch_mejorada");
const ae_a = document.getElementById("ae_ejecutaSincronia_await");

ae.addEventListener("click", () => {
  console.clear();
  console.log("presionado ae_asinc_promise_fetch.js");
  ae_ejecutaSincronia();
});

ae_m.addEventListener("click", () => {
  console.clear();
  console.log("presionado ae_asinc_promise_fetch_mejorada.js");
  ae_ejecutaSincronia_Mejorada();
});

ae_a.addEventListener("click", () => {
  console.clear();
  console.log("presionado ae_ejecutaSincronia_await.js");
  ae_ejecutaSincronia_await();
});

const ae_makeRequest = (method, url) => {
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

function ae_ejecutaSincronia() {
  console.log("Función ae_ejecutaSincronia");
  const baseURL = "https://jsonplaceholder.typicode.com";

  console.time("fetch took");
  const urlToCall = `${baseURL}/users/1`;
  const promise = fetch(urlToCall);

  console.log({ promise }); //no pending 26.27 //Estados son: pendig, fullfilled, Rejected
  console.log(promise); //pendig 26.27

  promise
    .then((res) => {
      console.log("salió bien-0", res);
      return res.json(); //--> 1
      //console.timeEnd("fetch took");
    })
    .then((user) => {
      // Este then es la respuesta de -->
      console.log("salió bien-1");
      console.log({ user });
      const urlToCall = `${baseURL}/posts?userId=${user.id}`;
      return fetch(urlToCall);
    })
    .then((res) => {
      return res.json();
    })
    .then((posts) => {
      // Este then es la respuesta de -->
      console.log("salió bien-2");
      console.log({ posts });
      const post = posts[4];
      const urlToCall = `${baseURL}/comments?postId=${post.id}`;
      return fetch(urlToCall);
    })
    .then((res) => {
      return res.json();
    })
    .then((comments) => {
      // Este then es la respuesta de -->
      console.log("salió bien-3");
      console.log({ comments });
      console.timeEnd("fetch took");
      return comments;
    })
    .catch((err) => {
      console.log("salió mal", err);
    })
    .finally(() => {
      console.log("Esto se ejecutaría SIEMPRE");
    });

  // Para evitar todas esas repeticiones se hace:
  function myFetch(url) {
    return fetch(url).then((res) => res.json);
  }
}

function ae_ejecutaSincronia_Mejorada() {
  console.log("Función ae_ejecutaSincronia_mejorada");
  const baseURL = "https://jsonplaceholder.typicode.com";

  console.time("fetch took");

  // Para evitar todas esas repeticiones se hace:
  function myFetch(url) {
    return fetch(url).then((res) => {
      return res.json();
    });
  }

  const urlToCall = `${baseURL}/users/1`;
  const promise = myFetch(urlToCall);

  // promise
  //   // .then((res) => {
  //   //   console.log({ res });
  //   // })
  //   .then((user) => {
  //     console.log({ user });
  //     const urlToCall = `${baseURL}/posts?userId=${user.id}`;
  //     return myFetch(urlToCall);
  //   })
  //   .then((posts) => {
  //     console.log({ posts });
  //     const post = posts[4];
  //     const urlToCall = `${baseURL}/comments?postId=${post.id}`;
  //     return myFetch(urlToCall);
  //   })
  //   .then((comments) => {
  //     console.log({ comments });
  //     console.timeEnd("fetch took");
  //     return comments;
  //   })
  //   .catch((err) => {
  //     console.log("salió mal", err);
  //   })
  //   .finally(() => {
  //     console.log("Esto se ejecutaría SIEMPRE");
  //   });

  promise
    .then((user) => myFetch(`${baseURL}/posts?userId=${user.id}`))
    .then((posts) => myFetch(`${baseURL}/comments?postId=${posts[4].id}`))
    .then((comments) => console.log({ comments }))
    .catch((err) => console.log("salió mal", err))
    .finally(() => {
      console.log("Esto se ejecutaría SIEMPRE");
    });
}

function ae_ejecutaSincronia_await() {
  console.log("Función ae_ejecutaSincronia_await");
  const baseURL = "https://jsonplaceholder.typicode.com";

  console.time("fetch took");

  // Para evitar todas esas repeticiones se hace:
  function myFetch(url) {
    return fetch(url).then((res) => {
      return res.json();
    });
  }

  async function getUserData(id) {
    console.time("fetch took await");

    try {
      const user = await myFetch(`${baseURL}/users/${id}`);
      const posts = await myFetch(`${baseURL}/posts?userId=${user.id}`);
      const comments = await myFetch(
        `${baseURL}/comments?postId=${posts[4].id}`
      );
      console.log({ user, posts, comments });
    } catch (error) {
      console.log({ error });
    }
    console.timeEnd("fetch took await");
  }

  getUserData(9);
}
