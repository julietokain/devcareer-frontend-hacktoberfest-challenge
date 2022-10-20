const containerEl = document.querySelector(".rating-container");
const submitEl = document.getElementById("submit-rating");
let btnEl = document.querySelectorAll(".btn");
const thankEl = document.querySelector(".thank-you");
let ratingEl = document.getElementById("rating");

submitEl.addEventListener("click", () => {
  containerEl.style.display = "none";
  thankEl.style.display = "block";
});

function handleClick(el) {
  for (let i = 0; i < btnEl.length; i++) {
    if (btnEl[i].style.backgroundColor === "rgb(251, 116, 19)") {
      btnEl[i].style.backgroundColor = "hsl(213, 18%, 22%)";
    }
  }
  el.style.backgroundColor = "hsl(25, 97%, 53%)";
}
