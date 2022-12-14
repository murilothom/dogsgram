import React, { useState, useEffect } from "react";

import styles from "./UserPhotoPost.module.css";

import Input from "../Forms/Input";
import Button from "../Forms/Button";
import Error from "../Helper/Error";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_POST } from "../../api";
import { useNavigate } from "react-router-dom";
import Head from "../Helper/Head";

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = useState({});
  const { data, error, loading, request } = useFetch();
  const [errorImg, setErrorImg] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (data) navigate("/account");
  }, [data, navigate]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!img.raw) {
      setErrorImg("Selecione alguma imagem");
      return;
    }
    const imgName = img.raw.name;
    if (!imgName.endsWith("png") && !imgName.endsWith("jpg")) {
      setErrorImg("Formato de imagem inválido!");
      return;
    }
    if (!nome.value || peso.value <= 0 || idade <= 0) return;
    const formData = new FormData();
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);
    formData.append("img", img.raw);

    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange(e) {
    setErrorImg(null);
    setImg({
      preview: URL.createObjectURL(e.target.files[0]),
      raw: e.target.files[0],
    });
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Poste sua foto" />
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
        {!error && errorImg && (
          <p style={{ color: "#f31", margin: "1rem 0" }}>{errorImg}</p>
        )}
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;
