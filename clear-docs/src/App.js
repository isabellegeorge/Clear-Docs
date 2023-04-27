
// import React, {Component} from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Home from './Home';
// import About from './About';
// import ImagePdfOCR from './front-end/ImagePdfOCR';
// import Header from './Header';
// class App2 extends Component {
//   componentDidMount() {
//     const pickerContainer = document.querySelector('.sc-ewnqHT')
//   pickerContainer.remove();
//   }
//   render(){
//   return (

// <Router>
//       <div>

//         <Header />
//         <Routes>
//           <Route path="/Clear-Docs.github.io/" element={<Home />} />
//           <Route path="/Clear-Docs.github.io/about" element={<About />} />
//           <Route path="/Clear-Docs.github.io/image-pdf-ocr" element={<ImagePdfOCR />} />

//         </Routes>
        
//       </div>
//     </Router>
//   );
//   }
// }

// function App(){

//   return <App2/>;
// }
// export default App;
/*

git add .
git commit -m "setup gh-pages"
git push --force
npm run deploy
*/




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
/*
git add .
git commit -m "setup gh-pages"
git push --force
npm run deploy
*/