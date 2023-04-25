import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import ImagePdfOCR from './front-end/ImagePdfOCR';
import Header from './Header';

function App() {
  return (

<Router>
      <div>

        <Header />
        <Routes>
          <Route path="/Clear-Docs.github.io/" element={<Home />} />
          <Route path="/Clear-Docs.github.io/image-pdf-ocr" element={<ImagePdfOCR />} />
          <Route path="/Clear-Docs.github.io/about" element={<About />} />

        </Routes>
        
      </div>
    </Router>
  );
}

export default App;

// git add .
// git commit -m "setup gh-pages"
// git push --force
// npm run deploy