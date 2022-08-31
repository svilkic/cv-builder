import React from 'react';
import styles from './title.module.css';

export function Title() {
  return (
    <div className={styles.title}>
      <div className={styles.group}>
        <h1 className={styles.initials}>AS</h1>
        <h2 className={styles.fullName}>Aleksa Svilkic</h2>
        <h3 className={styles.profession}>PROFESSIONAL TITLE</h3>
      </div>
    </div>
  );
}
