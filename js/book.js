const myLibrary = [];

// DOM
const body = document.querySelector("body");
const addBookDialog = document.querySelector("#add-book-dialog");
const addBookBtn = document.querySelector("#add-book-btn");
const cancelAddBookBtn = document.querySelector("#cancel-add-book-btn");
const submitAddBookBtn = document.querySelector("#submit-add-book-btn");
const libraryTable = document.querySelector("#library");

// Functions related to book and library
function Book(title, author = "", pages = undefined, read = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function displayBooks() {
    const libraryTableBody = libraryTable.querySelector("tbody");

    while (libraryTableBody.firstChild) {
	libraryTableBody.removeChild(libraryTableBody.firstChild);
    }
    
    for (let i = 0; i < myLibrary.length; i++) {
	const bookRow = document.createElement("tr");
	const titleData = document.createElement("td");
	const authorData = document.createElement("td");
	const pagesData = document.createElement("td");
	const readData = document.createElement("td");
	const removeData = document.createElement("td");
	const removeBtn = document.createElement("button");
	const readToggle = document.createElement("button");

	titleData.textContent = myLibrary[i].title;
	authorData.textContent = myLibrary[i].author;
	pagesData.textContent = myLibrary[i].pages;
	readData.dataset.read = myLibrary[i].read ? true : false;

	readToggle.type = "button";
	readToggle.className = "read-toggle";
	readToggle.textContent = "Toggle Read";
	readToggle.addEventListener("click", () => toggleRead(i));
	readData.appendChild(readToggle);

	removeBtn.type = "button";
	removeBtn.className = "remove-button";
	removeBtn.textContent = "Remove";
	removeBtn.addEventListener("click", () => removeBookRow(i));
	removeData.appendChild(removeBtn);

	bookRow.appendChild(titleData);
	bookRow.appendChild(authorData);
	bookRow.appendChild(pagesData);
	bookRow.appendChild(readData);
	bookRow.appendChild(removeData);

	libraryTableBody.appendChild(bookRow);
    }
}

// Functions related to DOM elements
function activateAddBookDialog() {
    addBookDialog.showModal();
}

function cancelAddBook() {
    addBookDialog.close();
}

function removeBookRow(rowNumber) {
    myLibrary.splice(rowNumber, 1);
    displayBooks();
}

function toggleRead(rowNumber) {
    myLibrary[rowNumber].read = !myLibrary[rowNumber].read;
    displayBooks();
}

function submitBookForm(event) {
    event.preventDefault();
    let title = document.querySelector("#book-title").value;
    let author = document.querySelector("#book-author").value;
    let pages = document.querySelector("#book-page-count").value;
    let read = document.querySelector("#book-read").value;
    const book = new Book(title, author, pages, read);

    myLibrary.push(book);
    
    addBookDialog.close();
    displayBooks();
}

// Create event listeners
addBookBtn.addEventListener("click", activateAddBookDialog);
cancelAddBookBtn.addEventListener("click", cancelAddBook);
submitAddBookBtn.addEventListener("click", submitBookForm);
