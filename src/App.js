import React from 'react';
import './Styles/App.css';

import Title from './Components/title.component';
import QuoteBox from './Components/quote-box.component';
import Footer from './Components/footer.component';

function App() {
  return (
    <>
      <div id='wrapper'>
        <div id='inner-frame' />
        <div id='ribbon' />
        <div id='content-wrapper'>
          <Title />
          <QuoteBox />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App;
