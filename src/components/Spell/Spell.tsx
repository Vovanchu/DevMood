import { useState, useEffect } from "react";
import styles from "./Spell.module.scss";
import { fetchSpells } from "../../api/fetch";
import type { SpellsProps } from "../../types/SpellsProps";

const Spell = () => {
  const [spells, setSpells] = useState<SpellsProps[]>([]);

  useEffect(() => {
    const load = async () => {
      try {
        const spellsData = await fetchSpells();
        setSpells(spellsData);
      } catch (error) {
        console.error("Failed to load spells data:", error);
      }
    };

    load();
  }, []);

  if (spells.length === 0) {
    return <div className={styles.spell__loading}>Loading spells...</div>;
  }

  return (
    <div className={styles.spell}>
      {spells.map((spell) => (
        <div key={spell.id} className={styles.spellCard}>
          <h3 className={styles.spellCard__title}>{spell.name}</h3>
          <p className={styles.spellCard__description}>{spell.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Spell;
