const fullname = document.getElementById("fullname");
const headerFullname = document.getElementById("header-fullname");
const headerHobby = document.getElementById("header-hobby");

const fetchPromise = fetch("https://api-hany.herokuapp.com");
fetchPromise.then(response => {
  return response.json();
}).then(response => {
  var biography = response.results;
  console.log(biography.hobi);
  fullname.innerHTML = biography.nama;
  headerFullname.innerHTML = biography.nama;
  headerHobby.innerHTML = biography.hobi;
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("./assets/js/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
