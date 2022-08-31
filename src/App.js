import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAutoLogin } from "./Hooks/useAutoLogin";

import "./App.css";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ProtectedRoute from "./Components/Helper/ProtectedRoute";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import User from "./Components/User/User";
import Photo from "./Components/Photo/Photo";
import UserProfile from "./Components/User/UserProfile";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  useAutoLogin()
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login/*" element={<Login />} />
              <Route
                path="/account/*"
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              />
              <Route path="/photo/:id" element={<Photo />} />
              <Route path="/profile/:user" element={<UserProfile />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
