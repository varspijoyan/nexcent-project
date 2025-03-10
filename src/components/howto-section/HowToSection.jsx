import styles from "../../styles/HowToSection.module.css";
import image from "../../assets/pana.svg";

export default function HowToSection() {
    return (
        <div className={styles.container}>
            <section className={styles.howToSection}>
                <img src={image} alt="image" />
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>How to design your site footer like we did?</h1>
                    <p className={styles.description}>
                        A well-designed footer enhances user experience and strengthens your brand identity. 
                        It should be clean, informative, and easy to navigate. Consider including essential links, 
                        contact details, and social media icons to keep visitors connected. With the right design, 
                        your footer can be both functional and aesthetically pleasing—just like ours.
                    </p>
                    <button className={styles.btn}>Learn More</button>
                </div>
            </section>
        </div>
    )
}