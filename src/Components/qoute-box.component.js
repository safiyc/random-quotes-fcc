import React from 'react';
// import './App.css';

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      quotes: [],
      currentQuote: 'The best time to plant a tree was 20 years ago. The second best time is now.',
      currentAuthor: 'Chinese Proverb'
    };

    this.handleQuote = this.handleQuote.bind(this);
  }

  componentDidMount() {
    const bypassCors = "https://cors-anywhere.herokuapp.com/";
    // const bypassCors = "https://crossorigin.me/";

    // raw format of my gist 'quotes.json'
    // when gist updated, must provide new link of raw
    const quotesJSON = "https://gist.githubusercontent.com/safiyc/00897047c3fed1757971379046308134/raw/829c07a0f6fa99727e8e118025bbfac348d4321e/quotes.json";

    fetch(bypassCors + quotesJSON)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            quotes: result.quotes
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  handleQuote() {
    const len = this.state.quotes.length;
    const randomIndex = Math.floor(Math.random() * len);
    let randomQuoteObj = this.state.quotes[randomIndex];

    let currentObjArray = Object.keys(randomQuoteObj)
      .map(function (key) {
        return randomQuoteObj[key]
      });

    let currentQuote = currentObjArray[0];
    let currentAuthor = currentObjArray[1];

    this.setState({
      currentQuote: currentQuote,
      currentAuthor: currentAuthor
    })
  }

  render() {
    const { error, isLoaded, currentQuote, currentAuthor } = this.state;

    if (error) {
      return (
        <>
          <style jsx>{`
            div {
              color: cadetblue;
              text-align: center;
              font-size: 2rem;
              margin-top: 40px;
            }
          `}</style>
          <div>ERROR: Failed to fetch quotes. Please try again.</div>
        </>
      );
    } else if (isLoaded === false) {
      return (
        <>
          <style jsx>{`
            div {
              color: cadetblue;
              text-align: center;
              font-size: 2rem;
              margin-top: 40px;
            }
          `}</style>
          <div>Fetching quotes from database...</div>
        </>
      )
    } else {
      return (
        <>
          <style jsx>{`
            .pink-paper {
              background: pink;
              box-shadow: inset 0 0 3px 2px rgba(0,0,0,.5);
              padding: 10px;
            }
            .green-paper {
              background: yellowgreen;
              box-shadow: inset 0 0 3px 2px rgba(0,0,0,.5);
              padding: 7px;
            }
            .lightblue-paper {
              background: lightblue;
              box-shadow: inset 0 0 3px 2px rgba(0,0,0,.5);
              padding: 6px;
            }
            #inner-quote-box {
              background: white;
              box-shadow: inset 0 0 3px 2px rgba(0,0,0,.5);
              min-height: 150px;
              padding: 20px;
              font-family: 'Architects Daughter', cursive;
              // position: relative;
            }
            #text {
              text-align: justify;
              font-size: 1.5rem;
              margin: 0 0 5px;
            }
            #author {
              text-align: right;
              font-size: 1.2rem;
              margin: 0 0 10px;
            }
            #buttons-box {
              // width: fit-content;
              // padding: 3px;
              // height: 8px;
            }
            button {
              border: none;
              border-bottom: 1px solid black;
              border-radius: 2px;
              background: rgba(0,0,0,.01);
              margin: 0 4px 10px;
              padding: 0 4px;
            }
          `}</style>
          <div id='quote-box' className='pink-paper'>
            <div className='green-paper'>
              <div className='lightblue-paper'>
                <div id='inner-quote-box'>
                  <div id='buttons-box'>
                    <button id='new-quote' onClick={this.handleQuote}>New Quote</button>
                    <button id='tweet-quote'>Tweet</button>
                  </div>
                  <p id='text'>{currentQuote}</p>
                  <p id='author'>{currentAuthor}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )
    }
  }
}

export default QuoteBox;
