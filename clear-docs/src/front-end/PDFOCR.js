import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import { createWorker } from "tesseract.js";
import "./../App.css";
// source: https://github.com/wojtekmaj/react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFOCR = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(0); // default page is 0 if we just want to do one long thing of text we have to change that
  const [pdfText, setPdfText] = useState("");
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [textColor, setTextColor] = useState('black');
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [fontSize, setFontSize] = useState('16px');
  const [fontFamily, setFontFamily] = useState('Arial'); // TODO: change if we want to
  const [ocrOutput, setOcrOutput] = useState(null);
  
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log(file)
  };

  const handlePdfLoad = async (pdf) => {
    const pdfText = await extractPdfText(pdf);
    setPdfText(pdfText);
    console.log(pdfText)
  };

  const extractPdfText = async (pdf) => {
    const worker = createWorker();
    await worker.load();
    const pdfText = [];

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const pageText = await page.getTextContent();
      const text = pageText.items.map((item) => item.str).join("");
      const { data: { text: ocrText } } = await worker.recognize(text);
      pdfText.push(ocrText);
      console.log(ocrText);
    }

    await worker.terminate();
    return pdfText.join("");
  };

  const handlePdfError = (error) => {
    console.error(error);
  };

  const handleDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };
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
function handleOcrButtonClick(event){
  <div>
  {file && (
    <Document
      file={file}
      onLoadSuccess={handleDocumentLoadSuccess}
      onLoadError={handlePdfError}
      onLoadComplete={handlePdfLoad}
      options={{
        cMapUrl: "cmaps/",
        cMapPacked: true,
        normalizeWhitespace: 'true'
      }}
    >
      <Page
        canvasBackground="white" // fix this so no preview shows
        pageNumber={pageNumber}
        width={1000}
      />
    </Document>
  )}
      {pageNumber != 0 ?
      <div>
    <p>
      Page {pageNumber} of {numPages}
    </p>
    <button
      disabled={pageNumber <= 1}
      onClick={() => setPageNumber(pageNumber - 1)}
    >
      Previous
    </button>
    <button
      disabled={pageNumber >= numPages}
      onClick={() => setPageNumber(pageNumber + 1)}
    >
      Next
    </button>
  </div> : 
  <div>

  </div>}
</div>
}
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
        <div>
        </div>
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
          Change PDF to Text
        </button>
      </form>
       <div> 
        {/* {<input type="file" onChange={handleFileChange} /> */}
         {file && (
          <Document
            file={file}
            onLoadSuccess={handleDocumentLoadSuccess}
            onLoadError={handlePdfError}
            onLoadComplete={handlePdfLoad}
            options={{
              cMapUrl: "cmaps/",
              cMapPacked: true,
              normalizeWhitespace: 'true'
            }}
          >
            <Page
              canvasBackground="white" // fix this so no preview shows
              pageNumber={pageNumber}
              width={1000}
            />
          </Document>
        )}
            {pageNumber != 0 ?
            <div>
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <button
            disabled={pageNumber <= 1}
            onClick={() => setPageNumber(pageNumber - 1)}
          >
            Previous
          </button>
          <button
            disabled={pageNumber >= numPages}
            onClick={() => setPageNumber(pageNumber + 1)}
          >
            Next
          </button>
        </div> : 
        <div>

        </div>}
      </div> 


      <div className="ocr-text-container">
        {pdfText && <div className="ocr-text">{pdfText}</div>}
        <div className="ocr-text-container">
          <div className="ocr-text colored" dangerouslySetInnerHTML={{ __html: pdfText }}></div>
        </div>
        <style>
          {`
        .ocr-text-container {
          white-space: pre-wrap;
          font-size: 20px;
          line-height: 1.5;
          font-family: sans-serif;
        }

        .colored {
          color: red;
        }
        `}
        </style>
      </div>
    </div>
  );
};

export default PDFOCR;
