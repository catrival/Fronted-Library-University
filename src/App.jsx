import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { AuthProvider, useAuth } from './components/login/AuthContext'
import Footer from "./components/footer";
import Header from "./components/header";
import StudentsList from "./components/students/StudentsList";
import StudentsFormCreate from "./components/students/StudentsFormCreate";
import StudentsFormEdit from "./components/students/StudentsFormEdit";
import BooksList from "./components/books/BooksList";
import BooksFormCreate from "./components/books/BooksFormCreate";
import BooksFormEdit from "./components/books/BooksFormEdit";
import LoansList from "./components/loans/LoansList";
import LoansFormCreate from "./components/loans/LoansFormCreate";
import LoansFormEdit from "./components/loans/LoansFormEdit";
import LoginAccess from "./components/login/LoginAccess";


const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/" />;
};

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <AuthProvider>
      <BrowserRouter>
        {isAuthenticated && <Header />}
        <Routes>
          <Route path="/" element={<LoginAccess />} />
          <Route path="/student" element={<PrivateRoute element={<StudentsList />} />} />
          <Route path="/student/:id" element={<PrivateRoute element={<StudentsFormEdit />} />} />
          <Route path="/create-student" element={<PrivateRoute element={<StudentsFormCreate />} />} />
          <Route path="/books" element={<PrivateRoute element={<BooksList />} />} />
          <Route path="/book/:id" element={<PrivateRoute element={<BooksFormEdit />} />} />
          <Route path="/create-book" element={<PrivateRoute element={<BooksFormCreate />} />} />
          <Route path="/loans" element={<PrivateRoute element={<LoansList />} />} />
          <Route path="/loan/:id" element={<PrivateRoute element={<LoansFormEdit />} />} />
          <Route path="/create-loan" element={<PrivateRoute element={<LoansFormCreate />} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
