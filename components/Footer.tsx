import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer id="contacts" className={styles.footer}>
      <div className={styles.contacts}>
        <p className={styles.phone}>+7 (999) 123-45-67</p>
        <p className={styles.email}>info@karelia-forest.ru</p>
      </div>
      <div className={styles.copy}>© 2026 KARELIA. Все права защищены.</div>
    </footer>
  );
}