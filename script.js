const button = document.getElementById("btn");
button.addEventListener("click", clickFunction);

function clickFunction(data) {
  const KanyeRestApi = "https://api.kanye.rest/";

  fetch(KanyeRestApi)
    .then(function (data) {
      return data.json();
    })
    .then(function (event) {
      const p = document.getElementById("quote");
      p.innerText = event.quote;
    });
}
