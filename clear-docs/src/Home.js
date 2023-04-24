import fulllogo from './img/full-logo.png';
import React from 'react';

function Home() {
  return (
    <div className="flex w-screen justify-center items-center h-auto">
      <div className='flex flex-col gap-4 p-8'>
        <img className="h-auto w-52" src={fulllogo} alt="Logo with the words 'Clear Docs'" />
        <h3 className="text-lg font-bold mt-8" id="get-started-heading">
          Get Started with ClearDocs!
        </h3>
        <p className="text-base leading-7" id="get-started-content">
          We utilize Optical Character Recognition (OCR) technology to allow users to upload their documents and images, and convert them into an accessible format. Our users can then select their choice of text color, size, font, and background color to suit their individual needs.
        </p>
        <h3 className="text-lg font-bold mt-8" id="who-can-use-heading">
          Who Can Use ClearDocs?
        </h3>
        <p className="text-base leading-7" id="who-can-use-content">
          ClearDocs is designed to help anyone and everyone on the web! While we aim to help users with visual disabilities, such as dyslexia or a need for color contrast, we hope to make digital text more accessible for everyone all over the globe.
        </p>
      </div>
    </div>
  );
}

export default Home;
