# Library Management System

This system allows users to add, view, and delete members and books, with all data stored in the browser's local storage. The project is built using modern JavaScript and follows modular programming principles for better code organization and maintainability.

## Features

### Member Management
- **Add Members**: Easily add new library members by providing an ID, name, and phone number.
- **View Members**: Display a list of all current members in a structured table format.
- **Delete Members**: Remove members from the system with a single click.

### Book Management
- **Add Books**: Add new books with details like ID, title, author, year of publication, and the associated member ID.
- **View Books**: Display a complete list of the borrowed books.
- **Delete Books**: Remove books from the library as needed.

### Validation
- Input validation ensures that:
  - Member and book IDs are unique and follow specified formats.
  - Member names and book titles contain only valid characters.
  - Phone numbers adhere to a 10-digit format starting with "05".
  - Member who borrowed a book must be registered.

### Data Storage
- All data is persistently stored in the browser's local storage.

## Technology Stack
- **Frontend**: HTML, CSS, and JavaScript
- **Data Storage**: Local Storage

## Future Enhancements
- Integration with a backend database for scalable data storage.
- Implementation of advanced search and filter features for books and members.
- Role-based access for different types of users (e.g., librarians, members).
