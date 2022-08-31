import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./Login.module.css";

import LoginForm from "./LoginForm";
import LoginRegister from "./LoginRegister";
import LoginForgetPassword from "./LoginForgetPassword";
import LoginResetPassword from "./LoginResetPassword";
import NotFound from "../NotFound/NotFound";


const Login = () => {
  const { data } = useSelector(state => state.user)

  return data ? (
    <Navigate to="/" />
  ) : (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="register" element={<LoginRegister />} />
          <Route path="forget" element={<LoginForgetPassword />} />
          <Route path="reset/" element={<LoginResetPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
