import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
  // const [isFirstLoad, setIsFirstLoad] = useState(false);

  // useEffect(() => {
  //   setIsFirstLoad(true);

  //   return () => {
  //     setIsFirstLoad(false);
  //   };
  // }, []);

  return (
    <nav className={styles.Navigation}>
      <NavLink
        className={({ isActive }) => (isActive ? styles.ActiveLink : styles.Link)}
        to="/"
        end
      >
        Main
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.ActiveLink : styles.Link)}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.ActiveLink : styles.Link)}
        to="/experience"
      >
        Experience
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.ActiveLink : styles.Link)}
        to="/projects"
      >
        Projects
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.ActiveLink : styles.Link)}
        to="/goals"
      >
        Goals
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.ActiveLink : styles.Link)}
        to="/contact"
      >
        Contact
      </NavLink>
    </nav>
  );
}

export default Navigation;
