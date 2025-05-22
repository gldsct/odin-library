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
});

modalCloseButton.addEventListener("click", () => {
    modal.classList.add("hidden");
    modalOverlay.classList.add("hidden");
});
