import { books, addBookToTheList} from './booksList.js';
import { isAlphaOrSpace, isAlpha } from '../utils/isAlphaSpace.js';
import { timeOutMessage } from '../utils/timeOutMessage.js';
import { isMemberIdValid, findMemberId } from '../utils/memberIdValidation.js';
//constants
const booksLength = books.length;
const bookIdMessage = {
    LENGTH: 'Book ID must be 4 digits!',
    CHARONLY: 'Book ID must be only characters!',
    UNIQUE: 'This ID already exists!'
}
const memberIdMessage = {
    LENGTH: 'Member ID must be 4 digits!',
    DIGITSONLY: 'Member ID must be only digits!',
}
const authorTitleMessage = 'Use only characters from a-z!';

//event listener to submit button and enter
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page
    startTheProgram();

})

function startTheProgram() {
    let bookId, bookTitle, author, year, bMemberId;
    bookId = document.querySelector('#bookId').value || '';
    bookTitle = document.querySelector('#bookTitle').value || '';
    author = document.querySelector('#author').value || '';
    year = document.querySelector('#year').value || '';
    bMemberId = document.querySelector('#bMemberId').value || '';

    if (isBookIdValid(bookId) && isMemberIdValid(bMemberId, '.bMemberId .js-message', memberIdMessage.LENGTH, memberIdMessage.DIGITSONLY) && findMemberId(bMemberId, '.bMemberId .js-message', 'Member Id not found!','book') && isAuthorTitleValid(author, bookTitle)) {
        addBookToTheList(bookId, author, bookTitle, bMemberId, year);
    }

}

function isBookIdValid(bookId) {
    const theLength = bookId.length;
    if (theLength != 4) {
        timeOutMessage('.bookId .js-message', bookIdMessage.LENGTH);
        return 0;
    }

    for (let i = 0; i < theLength; i++) {
        if (!isAlpha(bookId[i])) {
            timeOutMessage('.bookId .js-message', bookIdMessage.CHARONLY);
            return 0;
        }
    }

    for (let i = 0; i < booksLength; i++) {
        if (books[i].id == bookId) {
            timeOutMessage('.bookId .js-message', bookIdMessage.UNIQUE);

            return 0;
        }
    }

    return 1;
}

function isAuthorTitleValid(author, bookTitle) {
    for (let i = 0; i < author.length; i++) {
        if (!isAlphaOrSpace(author[i])) {
            timeOutMessage('.author .js-message', authorTitleMessage);

            return 0;
        }
    }

    for (let i = 0; i < bookTitle.length; i++) {
        if (!isAlphaOrSpace(bookTitle[i])) {
            timeOutMessage('.author .js-message', authorTitleMessage);

            return 0;
        }
    }

    return 1;
}