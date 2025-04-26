let myLibrary = [];

const bookContainer = document.querySelector(".book-container");

const container = document.querySelector(".container");

// Display Form //
const addNewButton = document.querySelector(".add-new");
newBookForm = new showAddNewBookForm();

addNewButton.addEventListener("click", () => {
    newBookForm.showForm();
})

function showAddNewBookForm() {
    this.display = false;
    this.formContainer = document.querySelector(".add-new-form-container");
    this.submitButton = this.formContainer.querySelector("button");
    this.titleInput = this.formContainer.querySelector("#input-book-title");
    this.authorInput = this.formContainer.querySelector("#input-book-author");

    this.showForm = function () {
        if (this.display) {
            this.formContainer.setAttribute('style', 'display: none;')
            this.display = false;
            addNewButton.textContent = "ADD"
        } else {
            this.formContainer.setAttribute('style', 'display: flex;')
            this.display = true;
            addNewButton.textContent = "CLOSE"
        }
    }

    this.submitButton.addEventListener("click", () => {
        addBookToLibrary(this.titleInput.value, this.authorInput.value)
        this.titleInput.value = "";
        this.authorInput.value = "";
    })

}

// function Book(title, author, id, index) {
//     this.title = title;
//     this.author = author;
//     this.id = id;
//     this.index = index;
//     this.readStatus = false;

//     this.toggleReadStatus = function (e, readButton, readP) {
//         this.readStatus = !this.readStatus;

//         readButton.style.backgroundImage = this.readStatus ? `url('eye.png')` : `url('cross-eyes.png')`
//         readP.textContent = `${this.readStatus ? 'read' : 'not read'} `;
//     }

//     this.createDomElement = function () {
//         let bookContainer = document.createElement("div");
//         bookContainer.classList.add("book-container")

//         let titleElement = document.createElement("p")
//         titleElement.classList.add("book-title")
//         titleElement.textContent = this.title;
//         bookContainer.appendChild(titleElement);

//         let authorElement = document.createElement("p")
//         authorElement.classList.add("book-author")
//         authorElement.textContent = this.author;
//         bookContainer.appendChild(authorElement);

//         let idElement = document.createElement("p")
//         idElement.classList.add("book-id")
//         idElement.textContent = this.id;
//         bookContainer.appendChild(idElement);

//         let bookInfomation = document.createElement("div");
//         bookInfomation.classList.add("book-infomation")
//         bookContainer.appendChild(bookInfomation);

//         let readP = document.createElement("p");
//         readP.textContent = `${this.readStatus ? 'read' : 'not read'} `;

//         let readButton = document.createElement("button");
//         readButton.style.backgroundImage = `url('cross-eyes.png')`
//         readButton.classList.add("read-book-button")

//         bookInfomation.appendChild(readButton);
//         bookInfomation.appendChild(readP);
//         bookInfomation.addEventListener("click", (e) => this.toggleReadStatus(e, readButton, readP))

//         let deleteButton = document.createElement("button");

//         deleteButton.classList.add("delete-book-button")
//         bookContainer.appendChild(deleteButton)
//         deleteButton.addEventListener("click", () => deleteBook(this));

//         return bookContainer;
//     }

//     this.domElement = this.createDomElement();

//     container.insertBefore(this.domElement, container.firstChild);


// }

class Book {

    constructor(title, author, id, index) {
        this.title = title;
        this.author = author;
        this.id = id;
        this.index = index;
        this.readStatus = false;
        this.domElement = this.createDomElement();
        container.insertBefore(this.domElement, container.firstChild);
    }

    toggleReadStatus() {
        this.readStatus = !this.readStatus;

        this.readButton.style.backgroundImage = this.readStatus ? `url('eye.png')` : `url('cross-eyes.png')`
        this.readP.textContent = `${this.readStatus ? 'read' : 'not read'} `;
    }

    createDomElement() {
        let bookContainer = document.createElement("div");
        bookContainer.classList.add("book-container")

        let titleElement = document.createElement("p")
        titleElement.classList.add("book-title")
        titleElement.textContent = this.title;
        bookContainer.appendChild(titleElement);

        let authorElement = document.createElement("p")
        authorElement.classList.add("book-author")
        authorElement.textContent = this.author;
        bookContainer.appendChild(authorElement);

        let idElement = document.createElement("p")
        idElement.classList.add("book-id")
        idElement.textContent = this.id;
        bookContainer.appendChild(idElement);

        let bookInfomation = document.createElement("div");
        bookInfomation.classList.add("book-infomation")
        bookContainer.appendChild(bookInfomation);

        this.readP = document.createElement("p");
        this.readP.textContent = `${this.readStatus ? 'read' : 'not read'} `;

        this.readButton = document.createElement("button");
        this.readButton.style.backgroundImage = `url('cross-eyes.png')`
        this.readButton.classList.add("read-book-button")

        bookInfomation.appendChild(this.readButton);
        bookInfomation.appendChild(this.readP);
        bookInfomation.addEventListener("click", (e) => this.toggleReadStatus(e, this.readButton, this.readP))

        let deleteButton = document.createElement("button");

        deleteButton.classList.add("delete-book-button")
        bookContainer.appendChild(deleteButton)
        deleteButton.addEventListener("click", () => deleteBook(this));

        return bookContainer;
    }
    
}

function deleteBook(bookToDelete) {

    //Filter book from library
    myLibrary = myLibrary.filter((book) => book.index != bookToDelete.index);

    //Update all indexs id's in library
    myLibrary.forEach((element, index) => element.index = index);

    //Remove Dom element from window
    bookToDelete.domElement.remove();

}

function addBookToLibrary(title, author) {
    myLibrary.push(new Book(title, author, crypto.randomUUID(), myLibrary.length));
}

myLibrary.push(new Book("The Midnight Library", "Matt Haig", crypto.randomUUID(), myLibrary.length));
myLibrary.push(new Book("Where the Crawdads Sing", "Delia Owens", crypto.randomUUID(), myLibrary.length));
myLibrary.push(new Book("The Silent Patient", "Alex Michaelides", crypto.randomUUID(), myLibrary.length));
myLibrary.push(new Book("It Ends with Us", "Colleen Hoover", crypto.randomUUID(), myLibrary.length));
myLibrary.push(new Book("The Four Winds", "Kristin Hannah", crypto.randomUUID(), myLibrary.length));
myLibrary.push(new Book("Verity", "Colleen Hoover", crypto.randomUUID(), myLibrary.length));
myLibrary.push(new Book("Atomic Habits", "James Clear", crypto.randomUUID(), myLibrary.length));
myLibrary.push(new Book("Lessons in Chemistry", "Bonnie Garmus", crypto.randomUUID(), myLibrary.length));
myLibrary.push(new Book("Spare", "Prince Harry", crypto.randomUUID(), myLibrary.length));
myLibrary.push(new Book("Daisy Jones & The Six", "Taylor Jenkins Reid", crypto.randomUUID(), myLibrary.length));



