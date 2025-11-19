import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './VCard.module.css';
import type { Profile } from './profile';
import ceoPhoto from '@/assets/ceo-photo.jpg';

interface VCardHeaderProps {
  profile: Profile;
}

const VCardHeader: React.FC<VCardHeaderProps> = ({ profile }) => {
  return (
    <>
      <img src={ceoPhoto} alt={profile.name} className={styles.profileImg} />

      <div className={styles.nameContainer}>
        <h2>{`${profile.title} ${profile.name}`.trim()}</h2>
        {profile.linkedin && (
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkedinIcon}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        )}
      </div>

      <p className={styles.title}>
        {profile.designation}
        {profile.companyName ? ` — ${profile.companyName}` : ''}
      </p>
    </>
  );
};

export default VCardHeader;
