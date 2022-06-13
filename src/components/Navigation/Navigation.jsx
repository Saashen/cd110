import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
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
      to="/timeline"
    >
      Timeline
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

export default Navigation;
