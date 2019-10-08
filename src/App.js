import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      quotes: [],
      currentQuote: 'First quote.',
      currentAuthor: 'First author'
    };

    this.handleQuote = this.handleQuote.bind(this);
  }

  componentDidMount() {
    const bypassCors = "https://cors-anywhere.herokuapp.com/";
    // const bypassCors = "https://crossorigin.me/";

    // raw format of my gist 'quotes.json'
    // when gist updated, must provide new link of raw
    const quotesJSON = "https://gist.githubusercontent.com/safiyc/00897047c3fed1757971379046308134/raw/8fc6ed48323c4a836605a9df3aa63d1f8d63efc7/quotes.json";

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
    const { error, isLoaded, quotes } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (isLoaded === false) {
      return <div>It's loading, bro...</div>
    } else {
      return (
        <div id='quote-box'>
          <ul>
            {quotes.map(el => (
              <li key={el.quote} id='text'>
                {el.quote} <span id='author'>{el.author}</span>
              </li>
            ))}
          </ul>
          <div >
            {this.state.currentQuote} - {this.state.currentAuthor}
          </div>
          <button id='new-quote' onClick={this.handleQuote}>New Quote</button>
          <button id='tweet-quote'>Tweet Quote</button>
        </div>
      )
    }
  }
}

export default App;
