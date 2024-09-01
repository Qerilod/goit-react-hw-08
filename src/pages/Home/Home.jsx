import React from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom"; // Зміна імпорту на правильний шлях

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h1>Welcome to Contact Book</h1>
      <p>This is your personal contact management app.</p>
    </div>
  );
};

export default Home;
