// www.youtube.com/watch?v=a91rU4Jk1KU&list=PLAmcNbGd0fkNl-CleT_XxwGKDk1j00uUp&index=15
console.log("Desde el ac_asinc_callback_hell.js del public");

const ac = document.getElementById("ac_asinc_callback_hell");

ac.addEventListener("click", () => {
  console.clear();
  console.log("presionado ac_asinc_callback_hell.js");
  ac_ejecutaSincronia();
});

const makeRequest = (method, url, callback) => {
  const xhr = new XMLHttpRequest();
  // console.log("Inicio fetching: ", {response: xhr.response })
  xhr.open(method, url);
  xhr.responseType = "json";

  xhr.onload = () => {
    // console.log({xhr})
    if (xhr.status >= 200 && xhr.status < 300) {
      callback(null, xhr.response);
    } else {
      callback(new Error(xhr.statusText), null);
    }
  };

  xhr.onerror = () => {
    callback(new Error("Network Error"), null);
  };
  xhr.send();
};

function ac_ejecutaSincronia() {
  console.log("Función ac_ejecutaSincronia");
  const baseURL = "https://jsonplaceholder.typicode.com";

  // console.time("LOOP TOOK");
  // let total = 0;
  // for (let index = 0; index < 500_000_000; index++) {
  //   total += index;
  //   //console.log(total)
  // }
  // console.timeEnd("LOOP TOOK");

  console.time("fetch took");
  const urlToCall = `${baseURL}/users/1`;
  console.log(`urlToCall: ${urlToCall}`);
  makeRequest("GET", urlToCall, (err, user) => {
    console.log({ user });
    const urlToCall = `${baseURL}/posts?userId=${user.id}`;
    console.log(`urlToCall: ${urlToCall}`);
    makeRequest("GET", urlToCall, (err, posts) => {
      console.log({ posts });
      const post = posts[4];
      const urlToCall = `${baseURL}/comments?postId=${post.id}`;
      console.log(`urlToCall: ${urlToCall}`);
      makeRequest("GET", urlToCall, (err, comments) => {
        console.log({ comments });
        console.timeEnd("fetch took");
      });
    });
  });
}

// // Peligro del INVERSION OF CONTROL
// paypal.createOrder(orderInfo, (err, createdOrder) => {
//   console.log("Esto lo ejecutaría el SDK Software Developer Kit")
// })
// paypal.createOrder(orderInfo).then(() =>{
//   console.log("Esto lo ejecutaría nuestro código")
// })
