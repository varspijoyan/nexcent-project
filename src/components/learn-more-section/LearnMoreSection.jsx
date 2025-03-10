import styles from "../../styles/LearnMoreSection.module.css";
import image from "../../assets/rafiki.svg";
export default function LearnMoreSection() {
    return (
       <div className={styles.container}>
            <section className={styles.learnMoreSection}>
                <img src={image} alt="image" />
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>The unseen of spending three years at Pixelgrade</h1>
                    <p className={styles.description}>
                        Over the past three years at Pixelgrade, we’ve uncovered the hidden challenges 
                        and rewarding experiences of crafting digital solutions. From pushing creative boundaries 
                        to refining every pixel, our journey has been filled with innovation, collaboration, and 
                        continuous learning. Here’s what we discovered along the way.
                    </p>
                    <button className={styles.btn}>Learn More</button>
                </div>
            </section>
       </div>
    )
}