import { books, removeBook } from './booksList.js';

export function renderBookPage() {
  let booksHTML = '';

  books.forEach((book) => {
    booksHTML += `
          <tr>
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.year}</td>
            <td>${book.memberid}</td>
            <td><button class="del-btn" data-book-Id = "${book.id}">Delete</button></td>
          </tr>
      `
  })

  document.querySelector('.content-table-body').innerHTML = booksHTML;

  document.querySelectorAll('.del-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const { bookId } = button.dataset;
      console.log(bookId);
      removeBook(bookId);
      renderBookPage();
    })
  })
}
