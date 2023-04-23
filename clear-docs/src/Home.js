import fulllogo from './img/full-logo.png';
// import './App.css';
import React from 'react';
// import ImagePDFOCR from './front-end/ImagePdfOCR';
// import Header from './Header';


function Home() {

  return (
    <div className="App">
      {/* <header className="App-header">  */}
      <h2>
        Home
      </h2>
      <img src={fulllogo} className="App-fulllogo" alt="logo with letter c and letter d" />

      {/* <hr style={{backgroundColor:'#004AAD', height: '100px', opacity: '.1', margin: '0px', position: 'absolute;' }} alt="decorative line"/> */}
      
      <h3>
        Clear Docs is a website tool to help users view and read text clearly!
      </h3>

      <body>
        We utilize OCR technology to allow users to freely upload their documents and images. User's may then select their choice of text color, size, font, and background color.
      </body>

      <h3>
        Who can use Clear Docs?
      </h3>
      <body>
        Anyone and everyone on the web! Although we aim to help user's with visual disabilities, such as dyslexia or a need for color contrast, we hope to help everyone all over the globe! 
      </body>
      

      {/* </header> */}
    </div>
  );
}

export default Home;

