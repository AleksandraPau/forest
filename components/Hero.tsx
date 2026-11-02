import styles from './Hero.module.css';

export default function Hero() {
    return(
        <section className={styles.hero}>
            <h1 className={styles.title}>Сосновый бор</h1>
            <p>Мягкие ковры ягеля и неповторимый аромат хвойного леса</p>
            <button className={styles.cta}>В путь!</button>
        </section>
    )
}