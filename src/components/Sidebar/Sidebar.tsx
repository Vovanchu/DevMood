import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.scss";
import { useState } from "react";

const SideBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className={styles.sidebar__backdrop}
          onClick={() => setOpen(false)}
        />
      )}

      {/* Burger */}
      <button
        className={`${styles.sidebar__burger} ${
          open ? styles.sidebar__burger__active : ""
        }`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Sidebar */}
      <aside
        className={`${styles.sidebar} ${open ? styles.sidebar__open : ""}`}
      >
        <ul className={styles.sidebar__menu}>
          <li>
            <NavLink
              to="/chatacters"
              className={({ isActive }) =>
                isActive
                  ? styles.sidebar__menu__link__active
                  : styles.sidebar__menu__link
              }
              onClick={() => setOpen(false)}
            >
              Characters
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/spells"
              className={({ isActive }) =>
                isActive
                  ? styles.sidebar__menu__link__active
                  : styles.sidebar__menu__link
              }
              onClick={() => setOpen(false)}
            >
              Spells
            </NavLink>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default SideBar;
