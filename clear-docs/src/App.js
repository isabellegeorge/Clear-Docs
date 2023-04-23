// import logo from '../public/logo.png';
import './App.css';
import ImagePDFOCR from './front-end/ImagePdfOCR';

function App() {
  var see = 'block';
  return (
    <div className="App">
      <header className="App-header"> 
        <h1>
          Clear Docs
        </h1>
        {/* TODO: make logo and put here instead of react logo */}
        <img src={'./logo.png'} className="App-logo" alt="logo with letter c and letter d" />
        <ImagePDFOCR/>

        {/* <ImageOCR/> */}
{/* <Test/> */}
        {/* TODO: implement button for if the user is uploading an image or a pdf */}
        {/* <PDFOCR/> */}
        {/* <button type="button" onClick={(
        <PDFOCR/>)}> Image
                </button> */}
        {/* TODO: have a checker to see if user input pdf or image and use pcrmypdf for pdfs */}
        {/* TODO: pdf implementation */}

      </header>
    </div>
  );
}

export default App;

