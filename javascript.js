const myLibrary = [];

const bookContainer = document.querySelector(".book-container");

const container = document.querySelector(".container");

function Book(title, author, id){
    this.title = title;
    this.author = author;
    this.id = id;

    this.bookContainer = document.createElement("div");
    this.bookContainer.classList.add("book-container")

    this.titleElement = document.createElement("p")
    this.titleElement.classList.add("book-title")
    this.titleElement.textContent = this.title;
    this.bookContainer.appendChild(this.titleElement);

    this.authorElement = document.createElement("p")
    this.authorElement.classList.add("book-author")
    this.authorElement.textContent = this.author;
    this.bookContainer.appendChild(this.authorElement);
    
    this.idElement = document.createElement("p")
    this.idElement.classList.add("book-id")
    this.idElement.textContent = this.id;
    this.bookContainer.appendChild(this.idElement);

    container.appendChild(this.bookContainer);
}



function addBookToLibrary(title, author){
    myLibrary.push(new Book(title, author, crypto.randomUUID()));

}

addBookToLibrary("Harry Potter and The Chamber of Secrets", "david mckensies")
console.table(myLibrary);




