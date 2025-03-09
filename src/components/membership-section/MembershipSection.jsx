import styles from "../../styles/MembershipSection.module.css";
import icon1 from "../../assets/Icon7.svg";
import icon2 from "../../assets/Icon8.svg";
import icon3 from "../../assets/Icon9.svg";
export default function MembershipSection() {
    return (
        <div className={styles.container}>
            <section className={styles.membershipSection}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Manage your entire community in a single system</h1>
                    <p className={styles.description}>Who is Nexcent suitable for?</p>
                </div>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <div className={styles.iconImage}>
                            <img src={icon1} alt="icon image" />
                        </div>
                        <div className={styles.cardTextContainer}>
                            <h1 className={styles.cardTitle}>Membership <br />Organizations</h1>
                            <p className={styles.cardTextDescription}>Our membership management software provides full automation of membership renewals and payments</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.iconImage}>
                            <img src={icon2} alt="icon image" />
                        </div>
                        <div className={styles.cardTextContainer}>
                            <h1 className={styles.cardTitle}>National <br />Associations</h1>
                            <p className={styles.cardTextDescription}>Our membership management software provides full automation of membership renewals and payments</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.iconImage}>
                            <img src={icon3} alt="icon image" />
                        </div>
                        <div className={styles.cardTextContainer}>
                            <h1 className={styles.cardTitle}>Clubs And <br />Groups</h1>
                            <p className={styles.cardTextDescription}>Our membership management software provides full automation of membership renewals and payments</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}