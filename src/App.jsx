import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import StudentsList from "./components/students/StudentsList";
import StudentsFormCreate from "./components/students/StudentsFormCreate";
import BooksList from "./components/books/BooksList";
import BooksFormCreate from "./components/books/BooksFormCreate";
import LoansList from "./components/loans/LoansList";
import LoansFormCreate from "./components/loans/LoansFormCreate";
import LoginAccess from "./components/login/LoginAccess";
import MainLayout from "./components/layouts/MainLayout";
import ProtectedRoute from "./Routes/ProtectedRoute";
import ProtectedRouteLogged from "./Routes/ProtectedRouteLogged";
import { Navigate } from 'react-router-dom';
import AuthLayout from "./components/layouts/AuthLayout";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRouteLogged><AuthLayout /></ProtectedRouteLogged>}>
          <Route path="/login" element={<LoginAccess />} />
        </Route>

        <Route path="/" element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
          <Route index element={<Navigate to={"/books"} />} />
          <Route path="/student" element={<StudentsList />} />
          <Route path="/create-student" element={<StudentsFormCreate />} />
          <Route path="/books" element={<BooksList />} />
          <Route path="/create-book" element={<BooksFormCreate />} />
          <Route path="/loans" element={<LoansList />} />
          <Route path="/create-loan" element={<LoansFormCreate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
