import * as React from 'react';
import styles from './VCard.module.css';

const VCardSkeleton: React.FC = () => {
  return (
    <div className={`${styles.cardContainer} ${styles.skeleton}`}>
      <div className={styles.skeletonAvatar} />
      <div className={styles.skeletonLine} />
      <div className={styles.skeletonLine} />
      <div className={styles.skeletonActions} />
    </div>
  );
};

export default VCardSkeleton;
