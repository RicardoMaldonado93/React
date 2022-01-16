import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/UseForm/useForm";
import validator from "validator";
import { setError, removeError } from "../../actions/ui";
import { useDispatch, useSelector } from "react-redux";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

  const [values, handleInputChange, reset] = useForm({
    name: "Ricardo Maldonado",
    email: "maldonado@gmail.com",
    password: "1234",
    password2: "1234",
  });

  const { name, email, password, password2 } = values;

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("name is required"));
      return false;

    } else if (!validator.isEmail(email)) {
      dispatch(setError("email is not valid"));
      return false;

    } else if (password !== password2 || password.length < 6) {
      dispatch(setError("Password should be at least 6 characters"));
      return false;
    }
    
    dispatch(removeError());
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}

        <input
          className="auth__input"
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />

        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />

        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />

        <input
          className="auth__input"
          type="password"
          placeholder="Confirm"
          name="password2"
          value={password2}
          onChange={handleInputChange}
        />

        <button className="btn btn-primary btn-block mt-5" type="submit">
          Register
        </button>
        <Link className="auth__create-account" to="/auth/register">
          Already registered?
        </Link>
      </form>

      <div className="auth__social-networks"></div>
    </>
  );
};
