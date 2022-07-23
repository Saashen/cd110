import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css';

import Header from '../Header/Header';
import Main from '../../pages/Main/Main';
import About from '../../pages/About/About';
import Timeline from '../../pages/Timeline/Timeline';
import Projects from '../../pages/Projects/Projects';
// import Goals from '../../pages/Goals/Goals';
import Contact from '../../pages/Contact/Contact';
import NotFound from '../../pages/NotFound/NotFound';

const App = () => (
  <div className={styles.App}>
    <Header />
    <Routes>
      <Route path="/" element={<Main />} end />
      <Route path="/about" element={<About />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/projects" element={<Projects />} />
      {/* <Route path="/goals" element={<Goals />} /> */}
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
);

export default App;
