import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../store/user";

import styles from "./LoginForm.module.css";
import stylesBtn from "../Forms/Button.module.css";

import useForm from "../../Hooks/useForm";

import Button from "../Forms/Button";
import Input from "../Forms/Input";
import Error from "../Helper/Error";
import Head from "../Helper/Head";

const LoginForm = () => {
  const dispatch = useDispatch()
  const username = useForm();
  const password = useForm();
  
  const { token, user } = useSelector(state => state)
  const isLoading = token.loading || user.loading
  const error = token.error || user.error

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      dispatch(userLogin({username: username.value, password: password.value}))
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Login" />
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {!isLoading ? (
          <Button>Entrar</Button>
        ) : (
          <Button disabled>Carregando...</Button>
        )}
        <Error error={error} />
      </form>
      <Link className={styles.forget} to="/login/forget">
        Esqueceu a senha?
      </Link>
      <div className={styles.register}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesBtn.button} to="/login/register">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
