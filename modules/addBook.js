export default function addBook(title, author) {
  let newBook = { "title": title, "author": author };
  let books = localStorage.getItem('books');
  if (books == null) {
    books = [];
  } else {
    books = JSON.parse(books);
  }
  books.push(newBook);
  localStorage.setItem('books', JSON.stringify(books));

}