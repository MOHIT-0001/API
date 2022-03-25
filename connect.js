window.addEventListener("load", showImages);
async function showImages() {
  // BackEnd call - Ajax
  const URL =
    "https://api.giphy.com/v1/gifs/search?api_key=vFRSFWo6g7vJ7ZAjt3DMDolU52ORTxwH&q=Tom%20Cruise";
  /*var xmlHttpRequest = new XMLHttpRequest(); // Create Object of XMLHttpRequest
  xmlHttpRequest.onreadystatechange = function () {
    // event bind
    console.log("ready state call ", this.readyState);
    if (this.readyState == 4 && this.status == 200) {
      console.log("Data Comes ", typeof this.responseText);
      let obj = JSON.parse(this.responseText); // JSON string convert object
      const arr = obj.data;
      arr.forEach((element) => createImage(element.images.original.url));
    }
  };
  xmlHttpRequest.open("GET", URL, true); // Async - true, Sync - False
  xmlHttpRequest.send();*/
  // ES6
  // ES 8 await async
  try {
    const response = await fetch(URL);
    console.log
    const result = await response.json();
    console.log(result)
    result.data.forEach((element) => createImage(element.images.original.url));
  } catch (err) {
    console.log("Error is ", err);
  }
  /*const promise = fetch(URL);
  promise
    .then((response) => {
      response
        .json()
        .then((result) => {
          //console.log(result);
          result.data.forEach((element) =>
            createImage(element.images.original.url)
          );
        })
        .catch((err) => {
          console.log("JSON INvalid ", err);
        });
    })
    .catch((err) => {
      console.log("Server Error ", err);
    });
    */
}

function createImage(url) {
  let img = document.createElement("img"); // <img>
  img.src = url;
  document.querySelector("#images").appendChild(img);
}
