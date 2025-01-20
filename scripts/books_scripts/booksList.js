export let books = [];

loadFromStorage();

export function loadFromStorage() {
    books = JSON.parse(localStorage.getItem('booksList')) || [
        { id: "ABCD", title: "Pride and Prejudice", author: "Jane Austen", year: 1813, memberid: 1001 },
        { id: "EFGH", title: "1984", author: "George Orwell", year: 1949, memberid: 1002 },
        { id: "IJKL", title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, memberid: 1003 },
        { id: "MNOP", title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, memberid: 1004 },
        { id: "QRST", title: "Hello World", author: "Herman Melville", year: 1851, memberid: 1001 },
        { id: "UVWX", title: "War and Peace", author: "Leo Tolstoy", year: 1869, memberid: 1005 },
        { id: "YZAB", title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, memberid: 1006 },
        { id: "CDEF", title: "Ulysses", author: "James Joyce", year: 1922, memberid: 1003 },
        { id: "GHIJ", title: "Brave New World", author: "Aldous Huxley", year: 1932, memberid: 1002 },
        { id: "OPQR", title: "Crime and Punishment", author: "Fyodor Dostoevsky", year: 1866, memberid: 1001 },
        { id: "STUV", title: "Anna Karenina", author: "Leo Tolstoy", year: 1877, memberid: 1005 },
        { id: "WXYZ", title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954, memberid: 1003 },
        { id: "AAAA", title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, memberid: 1006 },
        { id: "BBBB", title: "One Hundred Years of Solitude", author: "Gabriel Garcia Marquez", year: 1967, memberid: 1005 }];
}

export function saveBookToStorage() {
    localStorage.setItem('booksList', JSON.stringify(books));
}

export function addBookToTheList(bookId, author, bookTitle, bMemberId, year) {
    let newBook = { id: bookId.toUpperCase(), title: bookTitle, author: author, year: year, memberid: bMemberId };

    books.push(newBook);
    saveBookToStorage();
    document.querySelector('.added-message').innerHTML = `Book added successfully!`;
    setTimeout(() => {
        reset();
    }, 3000);
}

export function reset() {
    document.querySelector('#bookId').value = '';
    document.querySelector('#bookTitle').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#year').value = '';
    document.querySelector('#bMemberId').value = '';
    document.querySelector('.added-message').innerHTML = ``;

}

export function removeBook(bookId) {
    const newBookList = [];
    books.forEach((book) => {
        if (book.id != bookId) {
            newBookList.push(book);
        }
    })
    books = newBookList;
    saveBookToStorage();
}