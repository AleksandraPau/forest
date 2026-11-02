import React from 'react';
import styles from './Features.module.css';

export default function Features() {
  return (
    <section id="locations" className={styles.features}>
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Собачий лагерь</h3>
        <p className={styles.cardText}>Информация как добраться, маршруты и наши яркие впечатления.</p>
      </div>
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Экотропы</h3>
        <p className={styles.cardText}>Пешие прогулки по нетронутым цивилизацией лесам Карелии.</p>
      </div>
    </section>
  );
}
