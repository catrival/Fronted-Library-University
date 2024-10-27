import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import LoginForm from "./LoginForm";
import axios from "axios";
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { login } from '../../features/context/authSlice';

export default function LoginAccess() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5085/Auth/login",
        {
          email: e.target.email.value,
          password: e.target.password.value,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const token = response.data.token;
      if (token) {
        localStorage.setItem('token', token);
        const decoded = jwt_decode(token);
        const userInfo = jwt_decode(token);
        localStorage.setItem('user', JSON.stringify(userInfo));
        dispatch(login());
      }
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Inicio de sesión exitoso",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        navigate("/books");
      });
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error al iniciar sesión " + error,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <LoginForm
      props={{
        handleSubmit: handleSubmit,
      }}
    />
  );
}
