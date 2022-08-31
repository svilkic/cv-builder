import React from 'react';
// Components
import { Title } from './title';
import { Info } from './info';
// Styles
import styles from './header.module.css';

export function Header() {
  return (
    <section className={styles.header}>
      <Title />
      <Info />
      <span className={styles.ball} />
      <span className={styles.ball} />
      <span className={styles.ball} />
    </section>
  );
}
