const myLibrary = [];

// DOM
const body = document.querySelector("body");
const addBookDialog = document.querySelector("#add-book-dialog");
const addBookBtn = document.querySelector("#add-book-btn");
const cancelAddBookBtn = document.querySelector("#cancel-add-book-btn");
const submitAddBookBtn = document.querySelector("#submit-add-book-btn");

// Functions related to book and library
function Book(title, author = "", pages = undefined, read = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks() {
    let tableRows = myTable.querySelectorAll("tr");

    for (let i = 1; i < tableRows.length; i++) {
	myTable.removeChild(tableRows[i]);
    }
    for (book in myLibrary) {
	const bookRow = document.createElement("tr");
	const bookEntry = document.createElement("td");
	bookEntry.textContent = myLibrary[book].name;
	bookRow.appendChild(bookEntry);
	myTable.appendChild(bookRow);
    }

    if (!body.contains(myTable)) {
	body.appendChild(myTable);
    }
}

// Functions related to DOM elements
function activateAddBookDialog() {
    addBookDialog.showModal();
}

function cancelAddBook() {
    addBookDialog.close();
}



// Create event listeners
addBookBtn.addEventListener("click", activateAddBookDialog);
cancelAddBookBtn.addEventListener("click", cancelAddBook);
