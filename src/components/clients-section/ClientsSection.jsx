import styles from "../../styles/ClientsSection.module.css";
import icon1 from "../../assets/Icon1.svg";
import icon2 from "../../assets/Icon2.svg";
import icon3 from "../../assets/Icon3.svg";
import icon4 from "../../assets/Icon4.svg";
import icon5 from "../../assets/Icon5.svg";
import icon6 from "../../assets/Icon6.svg";

export default function ClientsSection() {
    return (
        <div className={styles.container}>
            <section className={styles.clientsSection}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Our Clients</h1>
                    <p className={styles.description}>We have been working with some Fortune 500+ clients</p>
                </div>
                <div className={styles.icons}>
                    <div className={styles.icon}>
                        <div className={styles.icon}>
                            <img src={icon1} alt="icon image" />
                        </div>
                        <div className={styles.icon}>
                            <img src={icon2} alt="icon image" />
                        </div>
                        <div className={styles.icon}>
                            <img src={icon3} alt="icon image" />
                        </div>
                        <div className={styles.icon}>
                            <img src={icon4} alt="icon image" />
                        </div>
                        <div className={styles.icon}>
                            <img src={icon5} alt="icon image" />
                        </div>
                        <div className={styles.icon}>
                            <img src={icon6} alt="icon image" />
                        </div>
                        <div className={styles.icon}>
                            <img src={icon3} alt="icon image" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}