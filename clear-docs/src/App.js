import logo from './logo.svg';
import './App.css';
import ImageOCR from './front-end/ImageOCR';

function App() {
  var see = 'block';
  return (
    <div className="App">
      <header className="App-header"> 
        <h1>
          Clear Docs
        </h1>
        {/* TODO: make logo and put here instead of react logo */}
        <img src={logo} className="App-logo" alt="logo" />
        <ImageOCR/>

        {/* TODO: implement button for if the user is uploading an image or a pdf */}
        <button type="button" onClick={(
        <ImageOCR/>)}> Image
                </button>
        {/* TODO: have a checker to see if user input pdf or image and use pcrmypdf for pdfs */}
        {/* TODO: pdf implementation */}

      </header>
    </div>
  );
}

export default App;

