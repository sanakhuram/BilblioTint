
# 📚✨ BilblioTint – Explore the World of Books!
![image](https://github.com/user-attachments/assets/d6da1d05-e0ee-451e-a578-b37c801fc39d)
Welcome to **BilblioTint**, the ultimate book search website for all the bibliophiles out there! 🚀 Dive into the world of books, search for your favorite titles, discover new authors, and find your next read – all with the help of the **Google Books API**. Let’s make book browsing fun and easy! 🎉

## 🌟 Features

- 🔍 **Search for Books**: Just type in your favorite book title, author, or keyword, and let the magic happen!
- 📖 **View Book Details**: See a short description, author, and more for each book in your results.
- 📱 **Responsive Design**: Whether you're on your phone, tablet, or computer, BilblioTint works like a charm!
- 💻 **Powered by Google Books API**: Get access to thousands of books right at your fingertips.

## 🚀 Getting Started

Want to run BilblioTint on your own machine? Follow these easy steps:

### Prerequisites

- A code editor like **VS Code** or **Sublime Text**.
- A local server like **XAMPP** or **WAMP** (or any basic web server).
  
### Installation Steps

1. **Clone the Repository** 🛠️:
   ```bash
   git clone https://github.com/sanakhuram/BilblioTint.git
   ```

2. **Navigate to the project folder**:
   ```bash
   cd BilblioTint
   ```

3. **Get your Google Books API Key** 🔑:
   - Head over to [Google Books API](https://developers.google.com/books) and sign up for a free API key.
   - Create a file called `config.js` in the root folder of the project, and add this line:
     ```javascript
     const API_KEY = "your_google_books_api_key_here";
     ```

4. **Run the project** 🏃‍♂️:
   - If you're using a local server like XAMPP, place the project files in the `htdocs` folder.
   - Start your server and open your browser to `http://localhost/BilblioTint/`.

🎉 And you're all set! Happy book searching!

## 🛠️ Built With

- **HTML5**: Structure of the website.
- **CSS3**: For all the cool styles and layout magic.
- **JavaScript**: Makes the site interactive and fetches data from the Google Books API.
- **Google Books API**: The heart of our data, providing all the book goodness! 📚

## 🔍 How It Works

1. **Search for a book** by title, author, or keyword.
2. **Browse results**: You'll see book covers, titles, authors, and short descriptions.
3. **Get details**: Click on a book for more information!
4. **Enjoy!**: BilblioTint gives you a delightful way to discover books.

## ⚙️ API in Action

Here's how we fetch the books using the **Google Books API**:

```javascript
fetch(`https://www.googleapis.com/books/v1/volumes?q=search_term&key=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
    // Process and display the book data
  })
  .catch(error => {
    console.error('Error fetching book data:', error);
  });
```

Simple, right? 🤓

## 📽️ Demo Video

Click the link below to watch the video demo:

[Download the video demo](Untitled video (15))



## 📜 License

This project is licensed under the **MIT License** – so feel free to use it however you like! See the [LICENSE](LICENSE) file for more details.

## 📬 Contact

Have questions, suggestions, or just want to say hi? 🙋‍♀️ Let’s connect!

- **Email**: [sana.khuram.baig@example.com]  
- **GitHub**: [@sanakhuram](https://github.com/sanakhuram)

---

Thank you for checking out **BilblioTint**! 🎉 Happy reading and happy coding! 📚💻

