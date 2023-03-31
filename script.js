

let links = document.querySelectorAll(".container a");
let bodyId = document.querySelector("body").id;

for (let link of links) {
  if (link.dataset.active == bodyId) {
    link.classList.add("active");
  }
}
