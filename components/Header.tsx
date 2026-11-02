import React from 'react';
import styles from './Header.module.css';

export default function Header() {
    return(
        <header className={styles.header}>
            <div className={styles.logo}>YAGEL</div>
            <nav className={styles.nav}>
                <a href="#locations" className={styles.navLink}>Локации</a>
                <a href="#schedule" className={styles.navLink}>Расписание</a>
                <a href="#contacts" className={styles.navLink}>Контакты</a>
            </nav>
            <button className={styles.burger}>
                <span></span>
            </button>
        </header>
    );
}