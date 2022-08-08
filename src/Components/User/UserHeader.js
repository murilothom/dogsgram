import React from "react";
import { useLocation } from "react-router-dom";

import styles from "./UserHeader.module.css";

import UserHeaderNav from "./UserHeaderNav";

const UserHeader = () => {
  const [title, setTitle] = React.useState("");
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === "/account/stats") {
      setTitle("Estatísticas");
    } else if (location.pathname === "/account/post") {
      setTitle("Adicionar Foto");
    } else {
      setTitle("Minha Conta");
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
