import React from 'react';

function Footer() {
  return (
    <>
      <style jsx>{`
        footer {
          position: absolute;
          bottom: 10px;
          width: 100%;
          text-align: center;
        } 
        a {
          color: black;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
      <footer>
        {/* <a href="http://www.safiycham.com/" target="_blank">
          Random Quotes&nbsp;&ndash;&nbsp;safiy cham &nbsp;&#169;&nbsp;2019
        </a> */}
        <a href="#" target="_blank">
          Random Quotes&nbsp;&ndash;&nbsp;2019
        </a>
      </footer>
    </>
  )
};

export default Footer;