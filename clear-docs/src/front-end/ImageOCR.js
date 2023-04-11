import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
function ImageOCR() {
  /* TODO: Choose what we want the user to be able to set */
  /* TODO: add spacing as an option */
  const [image, setImage] = useState(null);
  const [textColor, setTextColor] = useState('black');
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [fontSize, setFontSize] = useState('16px');
  const [fontFamily, setFontFamily] = useState('Arial'); // TODO: change if we want to
  const [ocrOutput, setOcrOutput] = useState(null);
 
  /* handlers below */
  function handleImageChange(event) {
    setImage(URL.createObjectURL(event.target.files[0]));
  }

  function handleTextColorChange(event) {
    setTextColor(event.target.value);
  }

  function handleBackgroundColorChange(event) {
    setBackgroundColor(event.target.value);
  }

  function handleFontSizeChange(event) {
    setFontSize(event.target.value);
  }

  function handleFontFamilyChange(event) {
    setFontFamily(event.target.value);
  }
  function handleOcrOutput(event) {
    setOcrOutput(event);
  }
  function handleOcrConversion(image) {
    Tesseract.recognize(image)
      .then((result) => {
        console.log('result using ocr:', result.data.text);
        handleOcrOutput(<h3>{result.data.text}</h3>); // fix to be not h3 but something smaller
      })
      .catch((error) => {
        console.error('error using ocr:', error);
      });
  }
  function handleOcrButtonClick() {
    if (image) {
      handleOcrConversion(image);
    } else {
      console.error('Error: Please select an image.');
    }
  }

  return (
    <div>
      <form>
        <label>
          Upload Image:&nbsp;
          <input type="file" onChange={handleImageChange} />
        </label>
        <br />
        <label>
          Text Color:&nbsp;
          <input type="color" value={textColor} onChange={handleTextColorChange} />
        </label>
        <br />
        <label>
          Background Color:&nbsp;
          <input type="color" value={backgroundColor} onChange={handleBackgroundColorChange} />
        </label>
        <br />
        <label>
          Font Size:&nbsp;
          <input type="range" min="10" max="28" value={fontSize} onChange={handleFontSizeChange} />
          {fontSize}
        </label>
        <br />
        <label>
          Font Family:&nbsp;
          <select value={fontFamily} onChange={handleFontFamilyChange}>
            {/* TODO: add dyslexia fonts */}
            <option value="Arial">Arial</option>
            <option value="Sans-Serif">Sans Serif</option>
            <option value="Times New Roman">Times New Roman</option>
          </select>
        </label>
        <br />
        {/* TODO: fix so that pdf work too */}
        <button type="button" onClick={handleOcrButtonClick}>
          Change Image to Text
        </button>
      </form>
      <br />
      {ocrOutput && (
        <div style={{ color: textColor, backgroundColor, fontSize, fontFamily }}>
          {ocrOutput}
        </div>
      )}

    </div>
  );
}

export default ImageOCR;
