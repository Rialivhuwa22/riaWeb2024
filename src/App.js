import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import Registration from "./Components/Registration";
import Header from "./Components/Header";
import Login from "./Components/Login";
import "./Style/TotalBox.css";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Function to handle login
  const handleLogin = (user) => {
    // Set the logged-in user in state
    setLoggedInUser(user);
  };

  return (
    <div className="App">
      {/* Display the header and pass the logged-in user */}
      <Header loggedInUser={loggedInUser} />

      {/* Define routes */}
      <Routes>
       
        <Route path="/registration" element={<Registration />} />
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} />}
        />
         <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
