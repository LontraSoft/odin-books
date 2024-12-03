const myLibrary = [];

function Book(bookName) {
    this.name = bookName; 
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const body = document.querySelector("body");
const myTable = document.createElement("table");
const headerRow = document.createElement("tr");
const headerCell = document.createElement("th");

headerCell.textContent = "Book Name";
headerRow.appendChild(headerCell);
myTable.appendChild(headerRow);

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

let hobbit = new Book("The Hobbit");
let wheelOfTime = new Book("The Wheel of Time");

addBookToLibrary(hobbit);
addBookToLibrary(wheelOfTime);

displayBooks();

let lordOfTheRings = new Book("Lord of the Rings");
addBookToLibrary(lordOfTheRings);

displayBooks();
