import React from "react";

import Input from "../Forms/Input";
import Button from "../Forms/Button";
import Error from "../Helper/Error";

import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PASSWORD_LOST } from "../../api";
import Head from "../Helper/Head";

const LoginForgetPassword = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("forget", "reset"),
      });
      const { json } = await request(url, options);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Recuperar Senha" />
      <h1 className="title">Recuperar senha</h1>
      {data ? (
        <p style={{ color: "#4c1", marginTop: "2rem", fontSize: "1.25rem" }}>
          {data}
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="E-mail / usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar</Button>
          )}
          <Error error={error} />
        </form>
      )}
    </section>
  );
};

export default LoginForgetPassword;
