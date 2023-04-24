import inclusion from './img/inclusion.png';
import './App.css';
import React from 'react';

function About() {
  return (
    <div className="flex w-screen justify-center items-center h-auto">
      <div className='flex flex-col gap-1 p-8'>
        <section id="hero" aria-label="hero-heading">
          <h2 id="hero-heading" className="text-3xl font-bold mb-4">Welcome to ClearDocs!</h2>
          <p className="text-base leading-7">Our mission is to make digital text easier to read and understand for everyone, especially those with dyslexia. We are excited to introduce our new react-based website that utilizes Optical Character Recognition (OCR) technology to convert PDFs and images into an accessible format.</p>
        </section>

        <section id="how-it-works" aria-label="how-it-works-heading">
          <h2 id="how-it-works-heading" className="text-2xl font-bold mt-8 mb-4">How It Works</h2>
          <h3 className="text-lg  leading-7">What is OCR?</h3>
          <p className="text-base leading-7">OCR is a technology that converts scanned documents and images into digital and editable text. We have integrated Tesseract, a JavaScript library that utilizes OCR to convert images to text, to provide you with the most accurate and efficient conversion possible.</p>
          <br/>

          <h3 className="text-lg  leading-7">How does it work?</h3>
          <p className="text-base leading-7 mb-8">For PDF to text conversion, we fetch the text from the PDF using react-pdf and parse the text using ‘createWorker’ in Tesseract. This ensures that the converted text is accurate and easily readable.</p>
        </section>
        <section id="equity" aria-label="equity-heading">
          <h2 id="equity-heading" className="text-2xl  font-bold mt-8 mb-4">Equity</h2>
          <h3 className="text-lg leading-7">Equity is important to us!</h3>
          <p className="text-base leading-7 mb-8">We understand that each person has their own preferences when it comes to reading. That's why we give our users the ability to select their choice of font, font size, font color, and background color. We have also chosen some dyslexia specific fonts, such as Atkinson Hyperlegible and Lexend, to provide a better reading experience for those with dyslexia.</p>
        </section>

        <figure aria-label="inclusion-heading">
          <img src={inclusion} className="App-inclusion rounded-lg shadow-lg" alt="Hands raised in a group, forming the letters of the word 'inclusion'"/>
        </figure>
      </div>
    </div>
  );
}

export default About;
