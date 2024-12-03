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

	titleData.textContent = myLibrary[i].title;
	authorData.textContent = myLibrary[i].author;
	pagesData.textContent = myLibrary[i].pages;
	readData.dataset.read = myLibrary[i].read ? true : false;

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



// Create event listeners
addBookBtn.addEventListener("click", activateAddBookDialog);
cancelAddBookBtn.addEventListener("click", cancelAddBook);
