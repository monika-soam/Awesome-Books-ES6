import { addBook } from './modules/addBook.js';
import { listBooks } from './modules/listBooks.js';
import { removeBook } from './modules/removeBook.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

const addButton = document.getElementById('addbtn');
const title = document.getElementById('title');
const author = document.getElementById('author');
const displayBook = document.getElementById('bookslist');
const container = document.getElementById('container');
const addbook = document.getElementById('addbook');
const contact = document.getElementById('contact');
const addnewbook = document.getElementById('addnewsec');
const listbook = document.getElementById('listsec');
const showcontact = document.getElementById('contactsec');
const removeButtons = document.getElementsByClassName('btn-remove');

const removeMyBook = (i) => {
  removeBook(i);
  const books = listBooks();
  displayBook.innerHTML = '';
  for (let i = 0; i < books.length; i += 1) {
    displayBook.innerHTML += `<tr>
      <td class="book-title">"${books[i].title}" by ${books[i].author}</td>
      <td class="button-remove"><button type="button" class="btn-remove">remove</button></td>
    </tr>`;
  }
  for (let i = 0; i < removeButtons.length; i += 1) {
    removeButtons[i].addEventListener('click', () => {
      removeMyBook(i);
    });
  }
}

const showMyBooks = () => {
  const books = listBooks();
  displayBook.innerHTML = '';
  for (let i = 0; i < books.length; i += 1) {
    displayBook.innerHTML += `<tr>
      <td class="book-title">"${books[i].title}" by ${books[i].author}</td>
      <td class="button-remove"><button type="button" class="btn-remove">remove</button></td>
    </tr>`;
  }

  for (let i = 0; i < removeButtons.length; i += 1) {
    removeButtons[i].addEventListener('click', () => {
      removeMyBook(i);
    });
  }
}

addButton.addEventListener('click', () => {
  addBook(title.value, author.value);
  title.value = '';
  author.value = '';
  container.classList.remove('invisible');
  addbook.classList.add('invisible');
  showMyBooks();
});

addnewbook.addEventListener('click', () => {
  addbook.classList.remove('invisible');
  container.classList.add('invisible');
  contact.classList.add('invisible');
});
showcontact.addEventListener('click', () => {
  container.classList.add('invisible');
  addbook.classList.add('invisible');
  contact.classList.remove('invisible');
});

listbook.addEventListener('click', () => {
  container.classList.remove('invisible');
  addbook.classList.add('invisible');
  contact.classList.add('invisible');
});

window.onload = () => {
  showMyBooks();

  setInterval(() => {
    document.getElementsByClassName('date-time')[0].innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  }, 1000);
};