import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from './VCard.module.css';
import type { Profile } from './profile';

interface VCardCompanySectionProps {
  profile: Profile;
}

const VCardCompanySection: React.FC<VCardCompanySectionProps> = ({ profile }) => {
  const companyLogoSrc = new URL(profile.companyLogo, import.meta.url).href;

  return (
    <div className={styles.companyBox}>
      <div className={styles.companyHeader}>
        <img
          src={companyLogoSrc}
          alt={profile.companyName || 'Company'}
          className={styles.companyLogo}
        />
        {profile.companyName && <h3>{profile.companyName}</h3>}
      </div>

      <p className={styles.companyTagline}>Where Technology Meets Simplicity</p>

      {profile.services && profile.services.length > 0 && (
        <ul className={styles.servicesList}>
          {profile.services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      )}

      <div className={styles.socialIcons}>
        {profile.companyLinkedin && (
          <a
            href={profile.companyLinkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialIcon} ${styles.socialLinkedin}`}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        )}

        {profile.youtube && (
          <a
            href={profile.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialIcon} ${styles.socialYoutube}`}
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        )}

        {profile.github && (
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialIcon} ${styles.socialGithub}`}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        )}

        {profile.twitter && (
          <a
            href={profile.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialIcon} ${styles.socialTwitter}`}
          >
            Twitter
          </a>
        )}

        {profile.facebook && (
          <a
            href={profile.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialIcon} ${styles.socialFacebook}`}
          >
            Facebook
          </a>
        )}

        {profile.instagram && (
          <a
            href={profile.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialIcon} ${styles.socialInstagram}`}
          >
            Instagram
          </a>
        )}

        {profile.paymentLink && (
          <a
            href={profile.paymentLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialIcon} ${styles.socialPayment}`}
          >
            Support / Payment
          </a>
        )}
      </div>
    </div>
  );
};

export default VCardCompanySection;
