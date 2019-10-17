import React from 'react';
import './App.css';

import Title from './Components/title.component';
import QuoteBox from './Components/qoute-box.component';
import CountdownBox from './Components/countdown-box.component';
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
          {/* <CountdownBox /> */}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App;
