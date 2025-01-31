import React from "react";

import styles from ".././styles/Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact:</h2>
        <p>Feel free to reach out!</p>
         <li className={styles.link}>
          <img src="https://img.icons8.com/?size=48&id=X0mEIh0RyDdL&format=png" alt="Email icon" />
          <a href="mailto:singhutkarshkumar097@gmail.com">singhutkarshkumar097@gmail.com</a>
        </li> 
         <li className={styles.link}>
          <img src="https://img.icons8.com/?size=48&id=WV326xpsBMyb&format=png" alt="Phone icon" />
          <a href="#">(+91)9973546694</a>
        </li>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="https://github.com/utkarshsingh004"><img src="https://img.icons8.com/?size=48&id=106440&format=png" alt="Github icon" /> </a>
        </li>
        <li className={styles.link}>
          <a href="https://wa.me/919973546694"><img src="https://img.icons8.com/?size=48&id=16713&format=png" alt="Whatsapp icon" /> </a>
        </li>
        <li className={styles.link}>
          <a href="https://instagram.com/_uksingh004/"><img src="https://img.icons8.com/?size=48&id=32323&format=png" alt="Instagram icon" /></a>
        </li>
        <li className={styles.link}>
          <a href="https://www.facebook.com/share/15jFiKNxTC/ "><img src="https://img.icons8.com/?size=48&id=uLWV5A9vXIPu&format=png" alt="Facebook icon" /> </a>
        </li>
        <li className={styles.link}>
          <a href="https://x.com/_uksingh004"> <img src="https://img.icons8.com/?size=50&id=phOKFKYpe00C&format=png" alt="X icon" /> </a>
        </li>
      </ul>
    </footer>
  );
};
