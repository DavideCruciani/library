const addButton = document.querySelector(".add-button")
const overlay = document.querySelector(".overlay")
const modal = document.querySelector(".modal")
const removeButton = document.querySelectorAll(".remove")
const title = document.querySelector("#title")

/* BUTTON TO OPEN THE MODAL */

addButton.addEventListener("click", () => {
  overlay.classList.add("active");
  modal.classList.add("active");
})

/* BUTTON TO CLOSE THE MODAL */

overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  modal.classList.remove("active");
})

/* DATA */

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
}

function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book)
}

const submit = document.getElementById("submit");

const Title = document.getElementById("title");
const Author = document.getElementById("author");
const Pages = document.getElementById("pages");
const Read = document.getElementById("isRead");

const booksGrid = document.querySelector(".books-grid");



addBookToLibrary("Il libro 2", "by Luciano Spada", "269pg", "read")
addBookToLibrary("Il libro 3", "by Luciano Spada", "269pg", "read")
addBookToLibrary("La Bibbia", "Cristo", "56pg", "read")

/* BOOKS CARDS :D */

myLibrary.forEach(Book => {
  let book = document.createElement("div");
  book.classList.add("book");
  booksGrid.appendChild(book);

  let bookName = document.createElement("p")
  bookName.classList.add("title");
  bookName.textContent = Book.title;
  book.appendChild(bookName);

  let bookAuthor = document.createElement("p")
  bookAuthor.textContent = Book.author;
  book.appendChild(bookAuthor);

  let bookPages = document.createElement("p")
  bookPages.textContent = Book.pages;
  book.appendChild(bookPages);

  let buttonGroup = document.createElement("div")
  buttonGroup.classList.add("button-group");
  book.appendChild(buttonGroup);

  let Button1 = document.createElement("button")
  Button1.classList.add("card-button");
  Button1.textContent = "Read";
  buttonGroup.appendChild(Button1);

  let Button2 = document.createElement("button")
  Button2.classList.add("card-button");
  Button2.classList.add("remove");
  Button2.textContent = "Remove";
  buttonGroup.appendChild(Button2);

});