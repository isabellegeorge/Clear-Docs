import React, { useState } from "react";
import PDFOCR from './PDFOCR';
import ImageOCR from './ImageOCR';

function ImagePDFOCR() {
  const [toggleOn, setToggleOn] = useState(false);

  const handleToggleClick = () => {
    setToggleOn(!toggleOn);
  };

  return (
    <div class="App">
    <h2>
    Get Started
    </h2>
    <h3>
      Please tap the button below toggle between choices (to upload an image or PDF).
    </h3>
      <button onClick={handleToggleClick}>
        {toggleOn ? "Image" : "PDF"}
      </button>
      {toggleOn ? <ImageOCR/> : <PDFOCR/>}
    </div>
  );
}

export default ImagePDFOCR;