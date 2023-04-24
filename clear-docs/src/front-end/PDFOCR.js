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
  const [lineHeight, setLineHeight] = useState("1");
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
  function handleLineHeightChange(event) {
    setLineHeight(event.target.value);
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
    <div className="flex flex-col w-auto">
      <h3 id="pdf-ocr-heading">PDF OCR</h3>
      <form className="space-y-4">
        <div className="flex items-center">
          <label htmlFor="pdf-upload" className="mr-2 font-sans text-lg">
            Upload PDF:&nbsp;
          </label>
          <input
            id="pdf-upload"
            type="file"
            className="rounded-md border"
            onChange={handleFileChange}
            accept="application/pdf"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="text-color" className="mr-2 font-sans text-lg">
            Text Color:&nbsp;
          </label>
          <input
            id="text-color"
            type="color"
            value={textColor}
            onChange={handleTextColorChange}
            className="rounded-md"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="background-color" className="mr-2 font-sans text-lg">
            Background Color:&nbsp;
          </label>
          <input
            id="background-color"
            type="color"
            value={backgroundColor}
            onChange={handleBackgroundColorChange}
            className="rounded-md"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="font-size" className="mr-2 font-sans text-lg">
            Font Size:&nbsp;
          </label>
          <input
            id="font-size"
            type="range"
            min="10"
            max="28"
            value={fontSize}
            onChange={handleFontSizeChange}
            className="rounded-md"
          />
          <span className="ml-2">{fontSize}</span>
        </div>
        <div className='flex items-center'>
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
          <label htmlFor="font-family" className="mr-2 font-sans text-lg">
            Font Family:&nbsp;
          </label>
          <select
            id="font-family"
            value={fontFamily}
            onChange={handleFontFamilyChange}
            className="rounded-md"
          >
            <option value="Arial">Arial</option>
            <option value="Sans-Serif">Sans Serif</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Lexend">Lexend</option>
            <option value="Atkinson Hyperlegible">Atkinson Hyperlegible</option>
          </select>
        </div>
        <button
          type="button"
          onClick={handleOcrButtonClick}
          className="py-2 px-4 bg-[#000000] text-white font-semibold rounded-md"
        >
          Change PDF to Text
        </button>
      </form>
  
      <div>
        {pdfText && (
          <div
            className={`ocr-text p-4 my-6 border-2 border-gray-200 rounded-md shadow-lg
              ${textColor === '#ffffff' ? 'bg-gray-800' : 'bg-white'}`}
            style={{
              color: textColor,
              backgroundColor: backgroundColor,
              fontSize: `${fontSize}px`,
              fontFamily: fontFamily,
              lineHeight
            }}
            role="textbox"
            tabIndex="0"
            aria-label="PDF converted text"
            aria-live="polite"
          >
            {pdfText}
          </div>
        )}
      </div>
    </div>
  );  
};

export default PDFOCR;