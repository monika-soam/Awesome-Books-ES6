export default function bookList() {
  const books = localStorage.getItem('books');
  if (books == null) {
    return [];
  }
  return JSON.parse(books);
}