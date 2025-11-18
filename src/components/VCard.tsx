import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import ceoPhoto from '../assets/ceo-photo.jpg';
import companyLogo from '../assets/codams_logo_final.png';
import styles from './VCard.module.css';

const VCard: React.FC = () => {
  return (
    <div className={styles.cardContainer}>
      <img src={ceoPhoto} alt="Mukta Gupta" className={styles.profileImg} />

      <div className={styles.nameContainer}>
        <h2>Mukta Gupta</h2>
        <a 
          href="https://linkedin.com/in/muktagupta" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.linkedinIcon}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      
      <p className={styles.title}>Founder & CEO — Codams</p>
      <p className={styles.contact}>+91-9013207895</p>
      <p className={styles.contact}>support@codams.com</p>

      <div className={styles.actionsGrid}>
        <a className={`${styles.button} ${styles.call}`} href="tel:+919013207895">
          <FontAwesomeIcon icon={faPhone} className={styles.buttonIcon} /> Call
        </a>
        <a 
          className={`${styles.button} ${styles.whatsapp}`} 
          href="https://wa.me/919013207895"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} className={styles.buttonIcon} /> WhatsApp
        </a>
        <a className={`${styles.button} ${styles.email}`} href="mailto:support@codams.com">
          <FontAwesomeIcon icon={faEnvelope} className={styles.buttonIcon} /> Email
        </a>
        <a 
          className={`${styles.button} ${styles.website}`} 
          href="https://www.codams.in" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGlobe} className={styles.buttonIcon} /> Website
        </a>
      </div>

      <div className={styles.companyBox}>
        <div className={styles.companyHeader}>
          <img src={companyLogo} alt="Codams Logo" className={styles.companyLogo} />
          <h3>Codams</h3>
        </div>

        <p className={styles.companyTagline}>Where Technology Meets Simplicity</p>

        <ul className={styles.servicesList}>
          <li>Website Design & Development</li>
          <li>Custom Automation Solutions</li>
          <li>API Development & Integration</li>
        </ul>

        <div className={styles.socialIcons}>
          <a href="https://linkedin.com/company/codams" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://youtube.com/@codams" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default VCard;
