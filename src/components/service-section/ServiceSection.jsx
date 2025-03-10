import styles from "../../styles/ServiceSection.module.css";
import vector1 from "../../assets/Icon9.svg";
import vector2 from "../../assets/Vector1.svg";
import vector3 from "../../assets/Vector2.svg";
import vector4 from "../../assets/Vector3.svg";

export default function ServiceSection() {
    return (
        <div className={styles.container}>
            <section className={styles.serviceSection}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Helping a local <br /> <span className={styles.highlight}>business reinvent itself</span></h1>
                    <p className={styles.description}>We reached here with our hard work and dedication</p>
                </div>
                <div className={styles.services}>
                    <div className={styles.service}>
                        <img src={vector2} alt="image" />
                        <div className={styles.text}>
                            <h3 className={styles.serviceAmount}>2,245,341</h3>
                            <p className={styles.serviceType}>Members</p>
                        </div>
                    </div>
                    <div className={styles.service}>
                        <img src={vector1} alt="image" />
                        <div className={styles.text}>
                            <h3 className={styles.serviceAmount}>46,328</h3>
                            <p className={styles.serviceType}>Clubs</p>
                        </div>
                    </div>
                    <div className={styles.service}>
                        <img src={vector3} alt="image" />
                        <div className={styles.text}>
                            <h3 className={styles.serviceAmount}>828,867</h3>
                            <p className={styles.serviceType}>Event Booking</p>
                        </div>
                    </div>
                    <div className={styles.service}>
                        <img src={vector4} alt="image" />
                        <div className={styles.text}>
                            <h3 className={styles.serviceAmount}>1,926,436</h3>
                            <p className={styles.serviceType}>Payments</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}