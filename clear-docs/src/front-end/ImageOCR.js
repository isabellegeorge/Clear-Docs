import React, { useState } from "react";
import Tesseract from "tesseract.js";
import { ColorPicker } from 'react-rainbow-components';
const colors = [
  '#F44334', // red
  '#E91E61', // pink
  '#9C27C0', // purple
  '#673AD7', // dark purple
  '#3F51E5', // indigo
  '#2196F3', // blue
  '#03A9F4', // light blue
  '#00BCD4', // cyan
  '#009688', // teal
  '#4CAF50', // green
  '#8BC03A', // light green
  '#CDDC39', // lime
  '#FFEB3B', // yellow
  '#FFC107', // gold
  '#FF9500', // orange
  '#FF5722', // deep orange
  '#795548', // brown
  '#9E9E9E', // grey
  '#607D8B', // dark grey
];
function ImageOCR(props) {
  /* TODO: Choose what we want the user to be able to set */
  /* TODO: add spacing as an option */
  const [image, setImage] = useState(null);
  const [textColor, setTextColor] = useState(colors[0]);
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [fontSize, setFontSize] = useState("16px");
  const [fontFamily, setFontFamily] = useState("Arial"); // TODO: change if we want to
  const [lineHeight, setLineHeight] = useState("1");
  const [ocrOutput, setOcrOutput] = useState(null);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  /* handlers below */
  function handleImageChange(event) {
    const file = event.target.files[0];
    setFile(file);
    const fileType = file.type.split("/").pop(); // "some-page"
    console.log(fileType);
    if (fileType == "pdf") {
      // alert('ERROR! Please Select PDF Instead.');
      // setIsToggled(false)
      //
    } else {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  }

  const handleTextColorChange = (color) => {
    console.log(color);
    setTextColor(color);
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
  function handleLineHeightChange(event) {
    setLineHeight(event.target.value);
  }
  function handleOcrOutput(event) {
    setOcrOutput(event);
  }
  function handleOcrConversion(image) {
    Tesseract.recognize(image)
      .then((result) => {
        console.log("result using ocr:", result.data.text);
        handleOcrOutput(<h3>{result.data.text}</h3>); // fix to be not h3 but something smaller
      })
      .catch((error) => {
        console.error("error using ocr:", error);
      });
  }
  function handleOcrButtonClick() {
    
    if (image) {
      alert("Converting your Image to Text! Please wait...")

      handleOcrConversion(image);
    } else {
      alert("Error: Please select an image.");
    }
  }

  return (
    <div>
      <h3 id="image-ocr-heading">Image OCR</h3>
      <form className="space-y-4">
        <div className="flex items-center">
          <label htmlFor="image-upload-input" className="mr-2 font-sans text-lg">
            Upload Image:&nbsp;
          </label>
          <input
            type="file"
            id="image-upload-input"
            className="rounded-md border"
            onChange={handleImageChange}
            accept="image/*"
          />
  
          <style>
            {`
          .palette-container {
            text-align: center;
          }

          .color-palette {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 20px;
          }

          .color-picker {
            width: 200px;
            margin: auto;
          }
        `}
          </style>
        </div>
        <div className="flex items-center">
          <label htmlFor="<ColorPaletteDyslexia/> "className="mr-2 font-sans text-lg">
            Text Color:&nbsp;
          </label>
          <ColorPicker value={textColor} onChange={setTextColor} />
        </div> 
        <p id="text-color-description" className="sr-only">
          Use this color picker to choose the text color for the converted image
          text.
        </p>
        <div className="flex items-center">
          <label htmlFor="background-color-input" className="mr-2 font-sans text-lg">
            Background Color:&nbsp;
          </label>
          <div>
      {/* <input type="text" value={textColor} onChange={(e) => setTextColor(e.target.value)} /> */}

    </div>
    <ColorPicker value={backgroundColor} onChange={setBackgroundColor} />

        </div>
        <p id="background-color-description" className="sr-only">
          Use this color picker to choose the background color for the converted
          image text.
        </p>
        <div className="flex items-center">
          <label htmlFor="font-size-input" className="mr-2 font-sans text-lg">
            Font Size:&nbsp;
          </label>
          <input
            type="range"
            id="font-size-input"
            min="10"
            max="28"
            value={fontSize}
            onChange={handleFontSizeChange}
            className="rounded-md"
            aria-describedby="font-size-description"
          />
          <span className="ml-2">{fontSize}</span>
        </div>
        <p id="font-size-description" className="sr-only">
          Use this slider to adjust the font size of the converted image text.
        </p>
        <div className="flex items-center">
          <label htmlFor="line-height-input" className="mr-2 font-sans text-lg">
            Line Height:&nbsp;
          </label>
          <input
            type="range"
            id="line-height-input"
            min="1"
            max="4"
            value={lineHeight}
            onChange={handleLineHeightChange}
            aria-describedby="line-height-description"
          />
          <span className="ml-2">{lineHeight}</span>
        </div>
        <p id="line-height-description" className="sr-only">
          Use this slider to adjust the line height of the converted image text.
        </p>
        <div className="flex items-center">
          <label htmlFor="font-family-select" className="mr-2 font-sans text-lg">
            Font Family:&nbsp;
          </label>
          <select
            id="font-family-select"
            value={fontFamily}
            onChange={handleFontFamilyChange}
            className="rounded-md"
            aria-describedby="font-family-description"
          >
            <option value="Arial">Arial</option>
            <option value="sans-serif">Sans Serif</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Lexend">Lexend</option>
            <option value="Atkinson Hyperlegible">Atkinson Hyperlegible</option>
          </select>
        </div>
        <p id="font-family-description" className="sr-only">
          Use this dropdown to choose the font family for the converted image
          text.
        </p>
        <button
          type="button"
          onClick={handleOcrButtonClick}
          className="py-5 px-25 bg-[#000000] text-white font-semibold rounded-md"
          aria-describedby="ocr-button-description"
        >
          Change Image to Text
        </button>
        <br/>
        <p id="ocr-button-description" className="sr-only">
          Press this button to convert the uploaded image to text.
        </p>
      </form>

      <div>
        {ocrOutput && (
          <div
            className={`ocr-text p-4 my-6 border-2 border-gray-200 rounded-md shadow-lg
              ${textColor === "#ffffff" ? "bg-gray-800" : "bg-white"}`}
            style={{
              color: textColor.hex,
              backgroundColor: backgroundColor.hex,
              fontSize: `${fontSize}px`,
              fontFamily: fontFamily,
              lineHeight,
            }}
            role="textbox"
            tabIndex="0"
            aria-label="Image converted text"
            aria-live="polite"
          >
            {ocrOutput}
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageOCR;