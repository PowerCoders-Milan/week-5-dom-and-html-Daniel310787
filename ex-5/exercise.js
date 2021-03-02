var books = [
    { title: 'The Design of EveryDay Things',  author: 'Don Norman', alreadyRead: false }, 
    { title: 'The power of now', author: 'Ekhart Tolle', alreadyRead: true }, 
    { title: 'The Three Body Problem', author: 'Liu Cixin', alreadyRead: true }
  ];
function loadBooks() {
    for(let i = 0; i < books.length; i++){
        let book = document.createElement("p");
        let author = document.createTextNode(books[i].title + " by " + books[i].author)
        book.appendChild(author);
        document.body.appendChild(book);
    }
}
// This function will execute when the window loads
window.onload = loadBooks();

