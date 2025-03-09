import styles from "../../styles/MainSection.module.css";
import image from "../../assets/Illustration.svg";

export default function MainSection() {
    return (
        <div className={styles.container}>
            <main className={styles.mainSection}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Lesson and insights <span className={styles.highlight}>from 8 years</span></h1>
                    <p className={styles.description}>Where to grow your business as a developer: site or social media?</p>
                    <button className={styles.btn}>Register</button>
                </div>
                <img src={image} alt="image" />
            </main>
        </div>
    )
}