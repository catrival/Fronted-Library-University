import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { logout } from "../features/context/authSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import jwt_decode from 'jwt-decode';

export default function Header() {
  const dispatch = useDispatch();
  const [role, setRole] = useState(null);
  const handleLogout = () => {
    dispatch(logout());
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const userInfo = jwt_decode(token);
      setRole(userInfo.Role);
    }
  }, []);

  return (
    <nav className="bg-gray-800 text-white py-4 flex justify-between items-center">
      <ul className="flex px-8 space-x-5">
        {/* “Students” link for ADMIN only */}
        {role === "ADMIN" && (
          <li>
            <Link to="/student" className="hover:text-blue-500">
              Estudiantes
            </Link>
          </li>
        )}
        {/* “Create Student” link for ADMIN only. */}
        {role === "ADMIN" && (
          <li>
            <Link to="/create-student" className="hover:text-blue-500">
              Crear Estudiante
            </Link>
          </li>
        )}
        {/* “Books” link visible for both roles */}
        <li>
          <Link to="/books" className="hover:text-blue-500">
            Libros
          </Link>
        </li>
        {role === "ADMIN" && (
          <li>
            <Link to="/create-book" className="hover:text-blue-500">
              Crear Libro
            </Link>
          </li>
        )}
        <li>
          <Link to="/loans" className="hover:text-blue-500">
            Préstamos
          </Link>
        </li>
        {role === "ADMIN" && (
          <li>
            <Link to="/create-loan" className="hover:text-blue-500">
              Crear Préstamo
            </Link>
          </li>
        )}
      </ul>
      <button onClick={handleLogout} className="mr-8 hover:text-blue-500">
        {" "}
        <FontAwesomeIcon icon={faSignOutAlt} /> Cerrar sesión{" "}
      </button>
    </nav>
  );
}
