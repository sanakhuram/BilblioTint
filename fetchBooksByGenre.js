export function fetchBooksByGenre(genre) {
  const resultsContainer = document.getElementById("results");
  const loader = document.getElementById("loader");
  resultsContainer.innerHTML = "";
  loader.classList.add("active");

  if (genre.toLowerCase() === "sci-fi") {
    genre = "Science Fiction";
  }

  fetch(
    `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&maxResults=9`
  )
    .then((response) => {
      loader.classList.remove("active");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      if (data.items && data.items.length > 0) {
        data.items.forEach((item) => {
          const book = item.volumeInfo;
          const title = book.title || "No Title";
          const authors = book.authors
            ? book.authors.join(", ")
            : "Unknown Author";
          const coverUrl = book.imageLinks
            ? book.imageLinks.thumbnail
            : "./placeholder.png";
          const bookUrl = book.infoLink;

          const resultItem = document.createElement("div");
          resultItem.classList.add("result-item");
          resultItem.innerHTML = `
                        <a href="${bookUrl}" target="_blank">
                          <img src="${coverUrl}" alt="${title} cover">
                          <div>
                            <h3>${title}</h3>
                            <p>by ${authors}</p>
                          </div>
                        </a>
                      `;

          resultsContainer.appendChild(resultItem);
        });
      } else {
        resultsContainer.innerHTML = "<p>No books found for this genre.</p>";
      }
    })
    .catch((error) => {
      loader.classList.remove("active");
      console.error("Error fetching the book data:", error);
      resultsContainer.innerHTML = `<p id="error-message">Error fetching book data. Please try again later.</p>`;
    });
}
