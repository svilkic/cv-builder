import React from 'react';
import styles from './info.module.css';

export function Info() {
  return (
    <div className={styles.info}>
      <div className={styles.group}>
        <p className={styles.data}>+1 123 456 789</p>
        <p className={styles.data}>email@email.com</p>
        <p className={styles.data}>123 Adress Name, City</p>
        <p className={styles.data}>www.website.com</p>
        <p className={styles.data}>www.linkedin.com/username</p>
        <p className={styles.data}>www.facebook.com/username</p>
        <p className={styles.data}>www.github.com/username</p>
      </div>
    </div>
  );
}
