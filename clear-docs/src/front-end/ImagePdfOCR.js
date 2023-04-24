import React, { useState } from "react";
import PDFOCR from './PDFOCR';
import ImageOCR from './ImageOCR';

function ImagePDFOCR() {
  const [toggleOn, setToggleOn] = useState(false);

  const handleToggleClick = () => {
    setToggleOn(!toggleOn);
  };

  return (
    <div className="flex w-screen justify-left items-center h-auto">
      <div className='flex flex-col gap-1 p-8'>
        <h3 className='text-lg font-bold leading-7' id="get-started-heading">
          Get Started
        </h3>
        <p id="toggle-button-instructions">
          Please tap the button below to toggle between choices (to upload an image or a PDF).
        </p>
        <button className='h-auto w-min' onClick={handleToggleClick} aria-expanded={toggleOn} aria-controls={toggleOn ? "image-ocr" : "pdf-ocr"}>
          {toggleOn ? "Image" : "PDF"}
        </button>
        {toggleOn ? <ImageOCR id="image-ocr" /> : <PDFOCR id="pdf-ocr" />}
      </div>
    </div>
  );
}

export default ImagePDFOCR;
