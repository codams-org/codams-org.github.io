import type { jsPDF } from 'jspdf';
import type { Profile } from './profile';

interface BuildVCardPdfParams {
  doc: jsPDF;
  profile: Profile;
  formattedLocationParts: string[];
  hasLocation: boolean;
}

export const buildVCardPdf = ({
  doc,
  profile,
  formattedLocationParts,
  hasLocation,
}: BuildVCardPdfParams) => {
  let y = 32;

  // Header: name + designation/company
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text(`${profile.title} ${profile.name}`.trim(), 24, y);
  y += 18;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  const roleLine = profile.companyName
    ? `${profile.designation} — ${profile.companyName}`
    : profile.designation;
  if (roleLine) {
    doc.text(roleLine, 24, y);
    y += 18;
  }

  // Contact info
  if (profile.phone) {
    const label = `Phone: ${profile.phone}`;
    doc.textWithLink(label, 24, y, { url: `tel:${profile.phone}` });
    y += 16;
  }

  if (profile.email) {
    const label = `Email: ${profile.email}`;
    doc.textWithLink(label, 24, y, { url: `mailto:${profile.email}` });
    y += 16;
  }

  // Location
  if (hasLocation) {
    const locationLine = [
      formattedLocationParts.join(', '),
      profile.pincode || '',
    ]
      .filter(Boolean)
      .join(' — ');
    if (locationLine) {
      doc.text(locationLine, 24, y);
      y += 18;
    }
  }

  // Website & key links (mirroring on-screen order)
  if (profile.website) {
    doc.textWithLink('Website', 24, y, { url: profile.website });
    y += 16;
  }

  if (profile.linkedin) {
    doc.textWithLink('LinkedIn', 24, y, { url: profile.linkedin });
    y += 16;
  }

  if (profile.companyLinkedin) {
    doc.textWithLink('Company LinkedIn', 24, y, { url: profile.companyLinkedin });
    y += 16;
  }

  if (profile.youtube) {
    doc.textWithLink('YouTube', 24, y, { url: profile.youtube });
    y += 16;
  }

  if (profile.github) {
    doc.textWithLink('GitHub', 24, y, { url: profile.github });
    y += 16;
  }

  if (profile.twitter) {
    doc.textWithLink('Twitter', 24, y, { url: profile.twitter });
    y += 16;
  }

  if (profile.facebook) {
    doc.textWithLink('Facebook', 24, y, { url: profile.facebook });
    y += 16;
  }

  if (profile.instagram) {
    doc.textWithLink('Instagram', 24, y, { url: profile.instagram });
    y += 16;
  }

  if (profile.paymentLink) {
    doc.textWithLink('Support / Payment', 24, y, { url: profile.paymentLink });
    y += 16;
  }

  // Services (as plain text list)
  if (profile.services && profile.services.length > 0) {
    y += 8;
    doc.text('Services:', 24, y);
    y += 14;
    profile.services.forEach((service) => {
      doc.text(`• ${service}`, 28, y);
      y += 14;
    });
  }
};
