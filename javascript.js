const myLibrary = [];

const bookContainer = document.querySelector(".book-container");

const container = document.querySelector(".container");

// Display Form //
const addNewButton = document.querySelector(".add-new");
newBookForm = new showAddNewBookForm();

addNewButton.addEventListener("click", () => {
    newBookForm.showForm();
})

function showAddNewBookForm(){
    this.display = false;
    this.formContainer = document.querySelector(".add-new-form-container");
    this.submitButton = this.formContainer.querySelector("button");
    this.titleInput = this.formContainer.querySelector("#input-book-title");
    this.authorInput = this.formContainer.querySelector("#input-book-author");

    this.showForm = function(){
        if(this.display){
            this.formContainer.setAttribute('style', 'display: none;')
            this.display = false;
            addNewButton.textContent = "ADD"
        }else{
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

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add("delete-book-button")
    bookContainer.appendChild(deleteButton)

    return bookContainer;
}


function Book(title, author, id, index){
    this.title = title;
    this.author = author;
    this.id = id;
    this.index = index;
    this.domElement = createBookDOMElement(this)
    console.log(index)
    container.appendChild(this.domElement);
}

function addBookToLibrary(title, author){
    myLibrary.push(new Book(title, author, crypto.randomUUID(), myLibrary.length));
}









