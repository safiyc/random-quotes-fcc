import React from 'react';

class CountdownBox extends React.Component {
  render() {
    return (
      <div id='counter' className='pink-paper'>
        <style jsx>{`
          #counter {
            position: absolute;
            bottom: -50px;
            height: 40px;
            left: 0;
            right: 0;
            margin: auto;
          }
        `}</style>
        This is the countdown box
      </div>
    )
  }
}

export default CountdownBox;