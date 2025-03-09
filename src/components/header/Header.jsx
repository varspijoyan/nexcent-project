import styles from "../../styles/Header.module.css";
import logo from "../../assets/Logo.svg";
import Hamburger from "hamburger-react";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={styles.container}>
            <header className={styles.headerSection}>
                <img className={styles.logo} src={logo} alt="logo image"/>
                <nav className={styles.navBar}>
                    <ul className={`${styles.ulLinks} ${isOpen ? styles.show : null}`}>
                        <li className={styles.link}><a href="#">Home</a></li>
                        <li className={styles.link}><a href="#">Features</a></li>
                        <li className={styles.link}><a href="#">Community</a></li>
                        <li className={styles.link}><a href="#">Blog</a></li>
                        <li className={styles.link}><a href="#">Pricing</a></li>
                    </ul>
                    <button className={styles.btn}>Register Now</button>
                    <div className={styles.hamburgerReact}>
                        <Hamburger toggled={isOpen} toggle={setIsOpen} />
                    </div>
                </nav>
            </header>
        </div>
    )
}