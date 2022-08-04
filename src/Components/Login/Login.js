import React from "react";
import { Routes, Route } from "react-router-dom";

import styles from "./Login.module.css";

import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginForgetPassword from "./LoginForgetPassword";
import LoginResetPassword from "./LoginResetPassword";

const Login = () => {
  return (
    <div className={styles.login}>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="create" element={<LoginCreate />} />
        <Route path="forget" element={<LoginForgetPassword />} />
        <Route path="reset" element={<LoginResetPassword />} />
      </Routes>
    </div>
  );
};

export default Login;
