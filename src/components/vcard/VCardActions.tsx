import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import styles from './VCard.module.css';
import type { Profile } from './profile';

interface VCardActionsProps {
  profile: Profile;
}

const VCardActions: React.FC<VCardActionsProps> = ({ profile }) => {
  return (
    <div className={styles.actionsGrid}>
      {profile.phone && (
        <a className={`${styles.button} ${styles.call}`} href={`tel:${profile.phone}`}>
          <FontAwesomeIcon icon={faPhone} className={styles.buttonIcon} /> Call
        </a>
      )}

      {profile.whatsappNumber && (
        <a
          className={`${styles.button} ${styles.whatsapp}`}
          href={`https://wa.me/${profile.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} className={styles.buttonIcon} /> WhatsApp
        </a>
      )}

      {profile.email && (
        <a className={`${styles.button} ${styles.email}`} href={`mailto:${profile.email}`}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.buttonIcon} /> Email
        </a>
      )}

      {profile.website && (
        <a
          className={`${styles.button} ${styles.website}`}
          href={profile.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGlobe} className={styles.buttonIcon} /> Website
        </a>
      )}
    </div>
  );
};

export default VCardActions;
