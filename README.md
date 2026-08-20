# Library Book Management System

This is the practical examination project for ITUE301 — Advanced Web Development Frameworks (SET B).

## 1. Project Name
Library Book Management System (itue301-exam-D25DCS165-C)

## 2. Frontend Setup and Run
The frontend is built with React (Vite).
```bash
cd frontend
npm install
npm run dev
```
The application will be available at `http://localhost:5173`.

## 3. Backend Setup and Run
The backend is built with Express.js.
```bash
cd backend
npm install
npm start
```
The server will run on `http://localhost:5000`.

## 4. MongoDB Setup
The backend uses MongoDB for data persistence, connected via Mongoose.
- The application connects to the database using the `MONGO_URI` specified in the `.env` file.
- The database contains three collections: `books`, `members`, and `borrowings` based on the defined Mongoose schemas.
- If the database does not exist locally, Mongoose will automatically create it upon the first insert.

## 5. Required Environment Variables
A `.env.example` file is provided. You need to create a `.env` file in the root directory with the following variables:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```
