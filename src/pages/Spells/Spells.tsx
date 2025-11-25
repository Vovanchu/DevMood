import { Spell } from "../../components/Spell";
import styles from "./Spells.module.scss";

const Spells = () => {
  return (
    <div className={styles.Spells}>
      <h1 className={styles.spells__title}>Spells</h1>
      <Spell />
    </div>
  );
};

export default Spells;
