import styles from "../../styles/Header.module.css";
import logo from "../../assets/Logo.svg";

export default function Header() {
    return (
        <div className={styles.container}>
            <header className={styles.headerSection}>
                <img className={styles.logo} src={logo} alt="logo image"/>
                <nav className={styles.navBar}>
                    <ul className={styles.ulLinks}>
                        <li className={styles.link}><a href="#">Home</a></li>
                        <li className={styles.link}><a href="#">Features</a></li>
                        <li className={styles.link}><a href="#">Community</a></li>
                        <li className={styles.link}><a href="#">Blog</a></li>
                        <li className={styles.link}><a href="#">Pricing</a></li>
                    </ul>
                    <button className={styles.btn}>Register Now</button>
                </nav>
            </header>
        </div>
    )
}