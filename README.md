#  Library App (MVP)

A minimal yet fully functional **Library Management App** built with **React** and powered by **JSON Server** for a mock backend. Users can manage a collection of books through full CRUD (Create, Read, Update, Delete) operations, mark books as favorites, and navigate through five distinct pages.

---

##  Features

- View all books in a clean, user-friendly interface
- Add new books with details like title, author, genre, and year
- Edit existing book details
- Delete books
- Mark/unmark books as favorites
- View all favorited books
- Client-side routing with React Router
- Data persistence with JSON Server

---

## Pages

### 1. **Book List Page**
- Displays all books with title, author, and favorite status
- Includes buttons to **View**, **Edit**, **Delete**, and **Toggle Favorite**

### 2. **Add Book Page**
- A form to add a new book with:
  - Title
  - Author
  - Genre
  - Publication Year
  - Favorite status (default: false)

### 3. **Edit Book Page**
- Pre-filled form to update any book’s information
- Editable fields include title, author, genre, year, and favorite status

### 4. **Book Details Page**
- Shows all details of a single book
- Options to toggle favorite status or navigate to edit or book list

### 5. **Favorite Books Page**
- Displays only the books marked as favorites
- Includes all options like in the Book List Page

---

## Technologies Used

- **React** (Frontend)
- **React Router** (Routing)
- **JSON Server** (Mock Backend)
- **CSS / Tailwind / Custom Styling** (UI)

---

## Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/leparan-felix/Library-app.git
   cd Library-app
2. **Install Dependencies**

bash
Copy
Edit
npm install
3. Start JSON Server (Backend)

bash
Copy
Edit
json-server --watch db.json --port 3001
4. Start React App (Frontend)

bash
Copy
Edit
npm start

**Book Data Format**
Books are stored in db.json and follow this structure:

json
Copy
Edit
{
  "id": 1,
  "title": "Book Title",
  "author": "Author Name",
  "genre": "Genre",
  "publicationYear": 2024,
  "isFavorite": false
}
**Future Improvements**
Search and filter functionality

Pagination

Book cover images

User authentication

**Contributing**
Contributions are welcome! Please open issues or submit a pull request for improvements or bug fixes.

**License**
This project is open-source and free to use under the MIT License.

**Acknowledgments**
This project was built as a learning MVP to practice:

React fundamentals

REST API integration

Component-based design

UI/UX basics

