import * as React from 'react';
import type { jsPDF } from 'jspdf';
import styles from './VCard.module.css';
import { profile } from './profile';
import VCardHeader from './VCardHeader';
import VCardActions from './VCardActions';
import VCardCompanySection from './VCardCompanySection';
import PdfDownloadButton from '@/components/ui/PdfDownloadButton';
import { buildVCardPdf } from './buildVCardPdf';

const VCard: React.FC = () => {
  const formattedLocationParts = [
    profile.locationArea,
    profile.locationState,
    profile.locationCountry,
  ].filter(Boolean);

  const hasLocation = formattedLocationParts.length > 0 || !!profile.pincode;

  const handleBuildPdf = (doc: jsPDF) => {
    buildVCardPdf({
      doc,
      profile,
      formattedLocationParts,
      hasLocation,
    });
  };

  return (
    <div className={styles.cardContainer}>
      <VCardHeader profile={profile} />

      {profile.phone && <p className={styles.contact}>{profile.phone}</p>}
      {profile.email && <p className={styles.contact}>{profile.email}</p>}

      {hasLocation && (
        <p className={styles.contact}>
          {formattedLocationParts.join(', ')}
          {profile.pincode ? ` — ${profile.pincode}` : ''}
        </p>
      )}

      <VCardActions profile={profile} />

      <VCardCompanySection profile={profile} />

      <div className={styles.downloadButtonContainer}>
        <PdfDownloadButton
          className={styles.downloadButton}
          fileName="mukta-gupta-vcard.pdf"
          buildPdf={handleBuildPdf}
        >
          Download vCard PDF
        </PdfDownloadButton>
      </div>
    </div>
  );
};

export default VCard;
