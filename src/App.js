import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      quotes: []
    };
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

  render() {
    const { error, isLoaded, quotes } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (isLoaded === false) {
      return <div>Loading...</div>
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
          <button id='new-quote'>New Quote</button>
          <button id='tweet-quote'>Tweet Quote</button>
        </div>
      )
    }
  }
}

export default App;
