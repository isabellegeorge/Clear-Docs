import React, { useState } from "react";
import PDFOCR from './PDFOCR';
import ImageOCR from './ImageOCR';

function ImagePDFOCR() {
  const [toggleOn, setToggleOn] = useState(false);

  const handleToggleClick = () => {
    setToggleOn(!toggleOn);
  };

  return (
    <div>
      <button onClick={handleToggleClick}>
        {toggleOn ? "Image" : "PDF"}
      </button>
      {toggleOn ? <ImageOCR/> : <PDFOCR/>}
    </div>
  );
}

export default ImagePDFOCR;