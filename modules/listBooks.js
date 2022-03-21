export default function bookList() {
  let books = localStorage.getItem('books');
  if (books == null) {
    return [];
  } else {
    return JSON.parse(books);
  }
}