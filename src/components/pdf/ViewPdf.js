
import React from 'react';
import './ViewPdf.css';

function ViewPdf({ pdfUrl }) {
  return (
    <div className="pdf-container">
      <iframe title="PDF Viewer" src={pdfUrl} className="pdf-frame" />
    </div>
  );
}

export default ViewPdf;
