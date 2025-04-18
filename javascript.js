const myLibrary = [];

const bookContainer = document.querySelector(".book-container");

const container = document.querySelector(".container");

function createBookDOMElement(book){
    let bookContainer = document.createElement("div");
    bookContainer.classList.add("book-container")
    
    let titleElement = document.createElement("p")
    titleElement.classList.add("book-title")
    titleElement.textContent = book.title;
    bookContainer.appendChild(titleElement);

    let authorElement = document.createElement("p")
    authorElement.classList.add("book-author")
    authorElement.textContent = book.author;
    bookContainer.appendChild(authorElement);
    
    let idElement = document.createElement("p")
    idElement.classList.add("book-id")
    idElement.textContent = book.id;
    bookContainer.appendChild(idElement);

    return bookContainer;
}

function Book(title, author, id){
    this.title = title;
    this.author = author;
    this.id = id;
    this.domElement = createBookDOMElement(this)

    container.appendChild(this.domElement);
}

function addBookToLibrary(title, author){
    myLibrary.push(new Book(title, author, crypto.randomUUID()));

}

for (let i = 0; i < 19; i++) {
    addBookToLibrary("The Book of Books!", "david mckensies")
    
}

console.table(myLibrary);




