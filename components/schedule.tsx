import React from 'react';
import styles from './Schedule.module.css';

export default function Schedule() {
  const trips = [
    { date: "15-16 Ноя", day: "Пн-Вт", type: "CrossFit", tagClass: styles.tagCrossfit, name: "Интенсивный подъем: Скалы и Каньоны", difficulty: "Высокая" },
    { date: "18-19 Ноя", day: "Чт-Пт", type: "Functional", tagClass: styles.tagFunctional, name: "Экотропа: Собачий лагерь & Трекинг", difficulty: "Средняя" },
    { date: "21-22 Ноя", type: "Endurance", tagClass: styles.tagEndurance, name: "Многодневное лесное погружение", difficulty: "Максимальная" }
  ];

  return (
    <section id="schedule" className={styles.schedule}>
      <div className={styles.container}>
        <div className={styles.headerBlock}>
          <div>
            <h2 className={styles.sectionTitle}>Расписание поездок</h2>
            <p className={styles.sectionSubtitle}>Ближайшие графики лесных выездов и распределение нагрузок.</p>
          </div>
          <div className={styles.legend}>
            <div className={styles.legendItem}><span className={`${styles.dot} ${styles.bgCrossfit}`}></span> CrossFit</div>
            <div className={styles.legendItem}><span className={`${styles.dot} ${styles.bgFunctional}`}></span> Functional</div>
            <div className={styles.legendItem}><span className={`${styles.dot} ${styles.bgEndurance}`}></span> Endurance</div>
          </div>
        </div>

        <div className={styles.grid}>
          {trips.map((item, index) => (
            <div key={index} className={styles.row}>
              <div className={styles.dateBlock}>
                <span className={styles.dateText}>{item.date}</span>
                {item.day && <span className={styles.dayText}>{item.day}</span>}
              </div>
              <div className={styles.contentBlock}>
                <span className={`${styles.tag} ${item.tagClass}`}>{item.type}</span>
                <h4 className={styles.tripName}>{item.name}</h4>
              </div>
              <div className={styles.metaBlock}>
                Сложность: <span className={styles.diffValue}>{item.difficulty}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
