import React from 'react';
import '../Styles/Quote-box.css';

// import CountdownBox from './countdown-box.component';

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
    this.handleTweet = this.handleTweet.bind(this);
  }

  componentDidMount() {
    const bypassCors = "https://cors-anywhere.herokuapp.com/";
    // const bypassCors = "https://crossorigin.me/";

    // raw format of my gist 'quotes.json'
    // when gist updated, must provide new link of raw
    const quotesJSON = "https://gist.githubusercontent.com/safiyc/00897047c3fed1757971379046308134/raw/756f3cdcbd4a51db817b56dfe11780c6b2979889/quotes.json";

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

  handleTweet() {
    const href = document.getElementById('tweet-quote');

    href.setAttribute('href', `https://twitter.com/intent/tweet?hashtags=${this.state.currentQuote} - ${this.state.currentAuthor}`);
  }

  render() {
    const { error, isLoaded, currentQuote, currentAuthor } = this.state;

    if (error) {
      return (
        <div className='error-box'>
          ERROR: Failed to fetch quotes. Please try again later.
        </div>
      );
    } else if (isLoaded === false) {
      return (
        <div className='error-box'>
          Fetching quotes from database...
        </div>
      )
    } else {
      return (
        <>
          <div id='quote-box' className='pink-paper'>
            <div className='green-paper'>
              <div className='lightblue-paper'>
                <div id='inner-quote-box'>
                  <div id='text-container'>
                    <div>
                      <p id='text'>{currentQuote}</p>
                      <p id='author'>{currentAuthor}</p>
                    </div>
                  </div>
                  <div id='buttons-box'>
                    <button id='new-quote' onClick={this.handleQuote}>New Quote</button>
                    <a id='tweet-quote' href target='_blank' rel='noopener noreferrer' onClick={this.handleTweet}><button>Tweet</button></a>
                  </div>
                </div>
              </div>
            </div>
            {/* <CountdownBox /> */}
          </div>

        </>
      )
    }
  }
}

export default QuoteBox;
