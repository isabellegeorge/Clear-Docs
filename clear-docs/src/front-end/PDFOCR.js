import React, { useState } from "react";
import { pdfjs } from "react-pdf";
import "./../App.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFOCR = () => {
  const [pdfText, setPdfText] = useState("");
  const [file, setFile] = useState(null);
  const [textColor, setTextColor] = useState("black");
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [fontSize, setFontSize] = useState("16px");
  const [fontFamily, setFontFamily] = useState("Arial");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log(file);
  };

  function handleTextColorChange(event) {
    setTextColor(event.target.value);
  }

  function handleBackgroundColorChange(event) {
    setBackgroundColor(event.target.value);
  }

  function handleFontSizeChange(event) {
    let font_size = `${event.target.value}px`
    setFontSize(event.target.value);
  }

  function handleFontFamilyChange(event) {
    setFontFamily(event.target.value);
  }

  const extractPdfText = async (pdf) => {
    let pdfText = "";
  
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      pdfText += content.items.map((item) => item.str).join(" ") + "\n";
    }
  
    return pdfText;
  };
  

  const handleOcrButtonClick = async () => {
    if (file) {
      const pdf = await pdfjs.getDocument({
        url: URL.createObjectURL(file),
        cMapUrl: "cmaps/",
        cMapPacked: true,
      }).promise;
      const pdfText = await extractPdfText(pdf);
      setPdfText(pdfText);
      console.log(pdfText);
    }
  };

  return (
    <div>
      <form>
        <label>
          Upload Image:&nbsp;
          {/* <input type="file" onChange={handleImageChange} />
           */}
          <input type="file" onChange={handleFileChange} />
        </label>
        <br />
        <div></div>
        <label>
          Text Color:&nbsp;
          <input
            type="color"
            value={textColor}
            onChange={handleTextColorChange}
          />
        </label>
        <br />
        <label>
          Background Color:&nbsp;
          <input
            type="color"
            value={backgroundColor}
            onChange={handleBackgroundColorChange}
          />
        </label>
        <br />
        <label>
          Font Size:&nbsp;
          <input
            type="range"
            min="10"
            max="28"
            value={fontSize}
            onChange={handleFontSizeChange}
          />
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
            <option value="Lexend">Lexend</option>
            <option value="Atkinson Hyperlegible">Atkinson Hyperlegible</option>
          </select>
        </label>
        <br />
        {/* TODO: fix so that pdf work too */}
        <button type="button" onClick={handleOcrButtonClick}>
          Change PDF to Text
        </button>
      </form>

      <div className="ocr-text-container">
        {pdfText && (
          <div
            className="ocr-text"
            style={{
              color: textColor,
              backgroundColor: backgroundColor,
              fontSize: `${fontSize}px`,
              fontFamily: fontFamily,
            }}
          >
            {pdfText}
          </div>
        )}
      </div>
    </div>
  );
};

export default PDFOCR;