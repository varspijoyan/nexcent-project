import image from "../../assets/Image1.svg";
import styles from "../../styles/CustomersSection.module.css";
import icon1 from "../../assets/Icon1.svg";
import icon2 from "../../assets/Icon2.svg";
import icon3 from "../../assets/Icon3.svg";
import icon4 from "../../assets/Icon4.svg";
import icon5 from "../../assets/Icon5.svg";
import icon6 from "../../assets/Icon6.svg";
export default function CustomersSection() {
  return (
    <div className={styles.container}>
      <section className={styles.customersSection}>
        <img src={image} alt="image" />
        <div className={styles.textContainer}>
          <p className={styles.customerComment}>
            Working with this team has been a game-changer for our sport. Their
            dedication and innovative approach have helped elevate British
            Dragon Board Racing to new heights. The support we received was
            beyond expectations, from strategic guidance to hands-on
            collaboration. Their commitment to excellence, attention to detail,
            and passion for our success have made a tangible difference. Thanks
            to their expertise, we've reached new audiences, improved our
            operations, and strengthened our community like never before.
          </p>
          <p className={styles.customerName}>Tim Smith</p>
          <p className={styles.customerCompany}>British Dragon Boat Racing Association</p>
          <div className={styles.icons}>
            <img src={icon1} alt="icon image" />
            <img src={icon2} alt="icon image" />
            <img src={icon3} alt="icon image" />
            <img src={icon4} alt="icon image" />
            <img src={icon5} alt="icon image" />
            <img src={icon6} alt="icon image" />
            <div className={styles.link}>
                <a href="#">Meet all customers</a>
            </div>
        </div>
        </div>
        
      </section>
    </div>
  );
}
