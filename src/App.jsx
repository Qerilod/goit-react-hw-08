import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./pages/RestrictedRoute/RestrictedRoute";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import LoginForm from "./components/LoginForm/LoginForm";
import Contacts from "./components/Contact/Contact";
import Home from "./pages/Home/Home";
import Navbar from "./components/NavBar/NavBar";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute>
              <RegisterForm />
            </RestrictedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute>
              <LoginForm />
            </RestrictedRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
