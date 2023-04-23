import inclusion from './img/inclusion.png';
import './App.css';
import React from 'react';


function About() {

  return (
    <div className="App">
      <h2>
        About
      </h2>
      <br />
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
      
      <img src={inclusion} className="App-inclusion" alt="image of hands up with letters of inclusion" />
    </div>
  );
}

export default About;

