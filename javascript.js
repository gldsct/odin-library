const myLibrary = [];

function Book(name, author, pages, hasRead) {
    if(!new.target) {
        throw Error("You must use the 'new' operator to call a constructor!");
    }
    this.id = self.crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

function addBookToLibrary(newName, newAuthor, newPages, newHasRead) {
    let newBook = new Book(newName, newAuthor, newPages, newHasRead);
    myLibrary.push(newBook);
}

function displayBooks() {
    // Select and remove all currently displayed books, to prevent duplicate displays of books
    let currentBooks = document.querySelectorAll("[data-unique-id]");
    currentBooks.forEach((item) => {
        booksContainer.removeChild(item);
    });

    myLibrary.forEach((item, bookIndex, array) => {
        // Create card for each book
        let bookAddition = document.createElement("div");
        bookAddition.dataset.uniqueId = item.id;
        bookAddition.style.borderRadius = "12px";
        bookAddition.style.backgroundColor = "#EFD6B5";
        bookAddition.style.border = "2px solid #658E58";
        bookAddition.style.padding = "1.5rem";

        let bookName = document.createElement("p");
        let bookAuthor = document.createElement("p");
        let bookPages = document.createElement("p");
        let bookHasRead = document.createElement("p");

        bookName.textContent = `Name: ${item.name}`;
        bookAuthor.textContent = `Author: ${item.author}`;
        bookPages.textContent = `Pages: ${item.pages}`;
        bookHasRead.textContent = item.hasRead === true? `Read? Read`: `Read? Not Read`; 
        
        // Create "Remove Book" button
        let bookRemove = document.createElement("button");
        bookRemove.textContent = "Remove Book";
        bookRemove.addEventListener("click", () => {
            myLibrary.splice(bookIndex, 1);
            booksContainer.removeChild(bookAddition);
        });

        bookAddition.appendChild(bookName);
        bookAddition.appendChild(bookAuthor);
        bookAddition.appendChild(bookPages);
        bookAddition.appendChild(bookHasRead);
        bookAddition.appendChild(bookRemove);
        booksContainer.appendChild(bookAddition);
    });
}

let booksContainer = document.querySelector(".books-container");

// Create "Add New Book" Button
let newBookButton = document.querySelector(".new-book-button");
newBookButton.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modalOverlay.classList.remove("hidden");
});

// Modal Functionality 
let modal = document.querySelector(".modal");
let modalOverlay = document.querySelector(".overlay");
let modalSubmitButton = document.querySelector(".modal-submit-button");
let modalCloseButton = document.querySelector(".modal-close-button");

modalSubmitButton.addEventListener("click", (event) => {
    event.preventDefault();
    let newBookName = document.querySelector("#book-name").value;
    let newBookAuthor = document.querySelector("#book-author").value;
    let newBookPages = document.querySelector("#book-pages").value;
    let newBookHasRead = document.querySelector("#has-read").checked ? true : false;
    addBookToLibrary(newBookName, newBookAuthor, newBookPages, newBookHasRead);

    modal.classList.add("hidden");
    modalOverlay.classList.add("hidden");

    displayBooks();
});

modalCloseButton.addEventListener("click", () => {
    modal.classList.add("hidden");
    modalOverlay.classList.add("hidden");
});
