import { useState, useEffect } from "react";
import styles from "./Card.module.scss";
import type { Character } from "../../types/СharactersProps";
import { Link } from "react-router-dom";
import { fetchCharacters } from "../../api/fetch";

const Card = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const gender = "female";

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchCharacters();
        setCharacters(data);
      } catch (error) {
        console.error("Error loading characters:", error);
      }
    };

    load();
  }, []);

  if (!characters.length) return <h2>Loading...</h2>;

  return (
    <div className={styles.card}>
      {characters.map((character) => (
        <>
          <Link
            to={"/chatacters/" + character.id}
            key={character.id}
            className={styles.card__item}
          >
            <h1 className={styles.card__item__title}>{character.name}</h1>
            <p
              className={styles.card__item__text}
              style={
                gender === character.gender
                  ? { color: "red" }
                  : { color: "blue" }
              }
            >
              {character.house}
            </p>
            <img
              className={styles.card__item__image}
              src={
                character.image
                  ? character.image
                  : "https://via.placeholder.com/150"
              }
              alt={character.name}
            />
          </Link>
        </>
      ))}
    </div>
  );
};

export default Card;
