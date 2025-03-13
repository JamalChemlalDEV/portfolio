import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hallo, ich bin Jamal Chemlal</h1>
                <p className={styles.description}>Ich bin ein autodidaktischer Student, der leidenschaftlich an Programmierung interessiert ist. Ich habe gelernt und lerne weiterhin durch Online-Kurse und Ressourcen. Derzeit bin ich auf der Suche nach einem Ausbildung, um meine Fähigkeiten weiterzuentwickeln und im Bereich der Softwareentwicklung zu wachsen.</p>
                <a href="mailto:chemlaljamal.job@gmail.com" className={styles.contactBtn}>Kontaktieren Sie mich</a>
            </div>
            <img src={getImageUrl("hero/myPhoto.jpg")}  className={styles.heroImg} alt="hero image" />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}