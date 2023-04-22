import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import { createWorker } from "tesseract.js";
import "./../App.css";
// source: https://github.com/wojtekmaj/react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFOCR = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); // default page is 1 if we just want to do one long thing of text we have to change that
  const [pdfText, setPdfText] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
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


  return (
    <div>
      <div>
        <input type="file" onChange={handleFileChange} />
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
              canvasBackground="red" // fix this so no preview shows
              pageNumber={pageNumber}
              width={1000}
            />
          </Document>
        )}
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
        </div>
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
