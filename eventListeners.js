import { searchBooks } from './searchBooks.js';
import { fetchBooksByGenre } from './fetchBooksByGenre.js';

document.getElementById("search-box").addEventListener("input", function () {
    const query = this.value.trim();
    searchBooks(query);
});

document.querySelectorAll(".genre-buttons button").forEach((button) => {
    button.addEventListener("click", function () {
        const genre = this.getAttribute("data-genre");
        document.body.style.backgroundColor = this.getAttribute("data-color");
        fetchBooksByGenre(genre);
    });
});

document.getElementById("logo-link").addEventListener("click", function (event) {
    event.preventDefault();
    const flowerContainer = document.getElementById("flower-container");

    for (let i = 0; i < 10; i++) {
        const flower = document.createElement("div");
        flower.classList.add("flower");
        flower.style.left = `${event.clientX}px`;
        flower.style.top = `${event.clientY}px`;
        flowerContainer.appendChild(flower);

        setTimeout(() => {
            const randomX = Math.random() * window.innerWidth;
            const randomY = Math.random() * window.innerHeight;

            flower.style.transform = `translate(${randomX - event.clientX}px, ${
                randomY - event.clientY
            }px)`;
            flower.style.opacity = 1;
        }, 50);

        setTimeout(() => {
            flower.remove();
        }, 2000);
    }

    setTimeout(() => {
        window.location.reload();
    }, 2000);
});

const buttons = document.querySelectorAll('.genre-buttons button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        buttons.forEach(btn => btn.classList.remove('active'));
        
        this.classList.add('active');

        document.body.style.backgroundColor = this.getAttribute('data-color');

        fetchBooksByGenre(this.getAttribute('data-genre'));
    });
});