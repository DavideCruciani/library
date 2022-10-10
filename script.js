const addButton = document.querySelector(".add-button")
const overlay = document.querySelector(".overlay")
const modal = document.querySelector(".modal")
const removeButton = document.querySelectorAll(".remove")
const title = document.querySelector("#title")
const Form = document.querySelector(".form")
const booksGrid = document.querySelector(".books-grid");

/* BUTTON TO OPEN THE MODAL */

addButton.addEventListener("click", () => {
  overlay.classList.add("active");
  modal.classList.add("active");
  Form.reset();
})

/* BUTTON TO CLOSE THE MODAL */

overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  modal.classList.remove("active");
})

function CloseModalAfterSubmitting() {
  overlay.classList.remove("active");
  modal.classList.remove("active");
}

/* DATA */

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
}

const getBookFromInput = (event) => {
  event.preventDefault();
  const newTitle = document.getElementById('title').value
  const newAuthor = document.getElementById('author').value
  const newPages = document.getElementById('pages').value
  const newRead = document.getElementById('isRead').checked
  addBookToLibrary(newTitle, newAuthor, newPages, newRead);
}

function addBookToLibrary(title, author, pages, read) {
  this.book = new Book(title, author, pages, read);
  myLibrary.push(this.book);
  bookCreator()
}

/* CARDS READ BUTTONS :D */

const ReadButton = document.querySelectorAll(".read-button");

const buttonPressed = e => {
  if (e.target.classList.contains("red-button")) {
  e.target.classList.replace("red-button", "green-button");
  e.target.textContent = "Read"
  } else {
    e.target.classList.replace("green-button", "red-button")
    e.target.textContent = "Not Read"
  }
}

/* CARDS REMOVE BUTTONS :D */

const RemoveButton = document.querySelectorAll(".remove");

const buttonRemove = e => {
  const parent = e.target.parentElement.parentElement.parentElement;
  const child =  e.target.parentElement.parentElement;
  bookTitle = child.firstChild.textContent;
  for (i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].title == bookTitle) {
      myLibrary.splice(i, 1);
    }
  }

  parent.removeChild(child);
}

/* CREATION OF BOOKS CARDS :D */

function bookCreator() {
  let book = document.createElement("div");
  book.classList.add("book");
  booksGrid.appendChild(book);

  let bookName = document.createElement("p")
  bookName.classList.add("title");
  bookName.textContent = this.book.title;
  book.appendChild(bookName);

  let bookAuthor = document.createElement("p")
  bookAuthor.textContent = this.book.author;
  book.appendChild(bookAuthor);

  let bookPages = document.createElement("p")
  bookPages.textContent = `${this.book.pages} Pages`;
  book.appendChild(bookPages);

  let buttonGroup = document.createElement("div")
  buttonGroup.classList.add("button-group");
  book.appendChild(buttonGroup);

  let Button1 = document.createElement("button")
  Button1.classList.add("card-button");
  Button1.classList.add("read-button");
  Button1.textContent = "Read";
  buttonGroup.appendChild(Button1);
  
  let Button2 = document.createElement("button")
  Button2.classList.add("card-button");
  Button2.classList.add("remove");
  Button2.textContent = "Remove";
  buttonGroup.appendChild(Button2);

  Button1.addEventListener("click", buttonPressed);

  Button2.addEventListener("click", buttonRemove);

  if (this.book.read === false) {
    Button1.classList.add("red-button");
    Button1.textContent = "Not Read"
  } else {
    Button1.classList.add("green-button");
  }

};

/* SUBMITTING LISTENERS */

Form.addEventListener("submit", getBookFromInput);
Form.addEventListener("submit", CloseModalAfterSubmitting);

/* EXAMPLES BOOKS */

addBookToLibrary('Il piccolo principe', 'Antoine de Saint-Exupéry', '137', true)
addBookToLibrary('1984', 'George Orwell', '654', false)
addBookToLibrary('Via col vento', 'Margaret Mitchell', '756', true)
