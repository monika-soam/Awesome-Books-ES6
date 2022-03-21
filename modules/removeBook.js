export default function removeBook(i) {
  let books = localStorage.getItem('books');
  if (books == null) {
    books = [];
  } else {
    books = JSON.parse(books);
  }

  books.splice(i, 1);
  localStorage.setItem('books', JSON.stringify(books));
}