import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCharacterById } from "../../api/fetchCharacterById";
import type { Character } from "../../types/СharactersProps";
import styles from "./PedsonDetails.module.scss";

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        if (!id) return;
        const data = await fetchCharacterById(id);
        setCharacter(data);
      } catch (error) {
        console.error(error);
      }
    };

    load();
  }, [id]);

  if (!character) return <h2>Loading...</h2>;

  return (
    <div className={styles.character}>
      <h1 className={styles.character__name}>{character.name}</h1>

      <p className={styles.character__field}>
        House:
        <span className={styles.character__value}>{character.house}</span>
      </p>

      <p className={styles.character__field}>
        Date of birth:
        <span className={styles.character__value}>{character.dateOfBirth}</span>
      </p>

      <p className={styles.character__field}>
        Actor:
        <span className={styles.character__value}>{character.actor}</span>
      </p>

      <img
        src={character.image}
        alt={character.name}
        className={styles.character__image}
      />
    </div>
  );
};

export default CharacterDetails;
