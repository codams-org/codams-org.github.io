import * as React from 'react';
import { jsPDF } from 'jspdf';

export type PdfDownloadButtonProps = {
  buildPdf: (doc: jsPDF) => void;
  fileName: string;
  className?: string;
  children: React.ReactNode;
};

const PdfDownloadButton: React.FC<PdfDownloadButtonProps> = ({
  buildPdf,
  fileName,
  className,
  children,
}) => {
  const handleClick = () => {
    const doc = new jsPDF({ unit: 'pt', format: 'a6' });
    buildPdf(doc);
    doc.save(fileName);
  };

  return (
    <button type="button" className={className} onClick={handleClick}>
      {children}
    </button>
  );
};

export default PdfDownloadButton;
