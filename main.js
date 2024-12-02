import { searchBooks } from "./searchBooks.js";
import { fetchBooksByGenre } from "./fetchBooksByGenre.js";
import "./eventListeners.js";

document.addEventListener("DOMContentLoaded", () => {
  const animationContainer = document.getElementById("animation-container");

  function triggerAnimation(type) {
    for (let i = 0; i < 10; i++) {
      const animatedItem = document.createElement("div");
      animatedItem.classList.add("animated-item", type);

      animatedItem.style.left = `${Math.random() * window.innerWidth}px`;
      animatedItem.style.top = `${Math.random() * window.innerHeight}px`;

      animationContainer.appendChild(animatedItem);

      setTimeout(() => {
        animatedItem.classList.add("animate");
      }, 50);

      setTimeout(() => {
        animatedItem.remove();
      }, 2000); 
    }
  }

  document.querySelectorAll(".genre-buttons button").forEach((button) => {
    button.addEventListener("click", function () {
      const genre = this.getAttribute("data-genre");
      const color = this.getAttribute("data-color");
      document.body.style.backgroundColor = color;
      
      if (genre === "romance") {
        triggerAnimation("heart");
      } else if (genre === "nature") {
        triggerAnimation("leaf");
      } else if (genre === "sci-fi") {
        triggerAnimation("star");
      } else if (genre === "comedy") {
        triggerAnimation("comedy");
      } else if (genre === "mystery") {
        triggerAnimation("mystery");
      } else if (genre === "fantasy") {
        triggerAnimation("fantasy");
      } else if (genre === "crime") {
        triggerAnimation("crime");
      } else if (genre === "horror") {
        triggerAnimation("horror");
      }

      fetchBooksByGenre(genre);
    });
  });
});
