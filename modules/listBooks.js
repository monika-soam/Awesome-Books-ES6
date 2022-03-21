export const listBooks = () => {
  const books = localStorage.getItem('books');
  if (books == null) {
    return [];
  }
  return JSON.parse(books);
}