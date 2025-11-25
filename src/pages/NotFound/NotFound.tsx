import React from "react";
import styles from "./NotFound.module.scss";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.notFound__content}>
        <h1 className={styles.notFound__title}>404</h1>

        <p className={styles.notFound__text}>
          Сторінку не знайдено або вона була переміщена.
        </p>

        <Link to="/" className={styles.notFound__button}>
          Повернутись на головну
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
