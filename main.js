import { searchBooks } from './searchBooks.js';
import { fetchBooksByGenre } from './fetchBooksByGenre.js';
import './eventListeners.js';

document.addEventListener("DOMContentLoaded", () => {
    const animationContainer = document.getElementById("animation-container");

    function triggerAnimation(type) {
        for (let i = 0; i < 10; i++) { // Create 10 animated items
            const animatedItem = document.createElement("div");
            animatedItem.classList.add("animated-item", type);

            // Set initial position at random points within the viewport
            animatedItem.style.left = `${Math.random() * window.innerWidth}px`;
            animatedItem.style.top = `${Math.random() * window.innerHeight}px`;

            animationContainer.appendChild(animatedItem);

            // Trigger the animation after a short delay
            setTimeout(() => {
                animatedItem.classList.add("animate");
            }, 50);

            // Remove the animated item after the animation
            setTimeout(() => {
                animatedItem.remove();
            }, 2000); // Adjust duration as needed
        }
    }

    // Event listener for genre buttons
    document.querySelectorAll(".genre-buttons button").forEach(button => {
        button.addEventListener("click", function() {
            const genre = this.getAttribute("data-genre");
            const color = this.getAttribute("data-color");
            document.body.style.backgroundColor = color;

            // Trigger the appropriate animation based on genre
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
            } else if(genre === "horror" ){
                triggerAnimation("horror");
            } else {
                
            }
            
               

            fetchBooksByGenre(genre);
        });
    });
});

