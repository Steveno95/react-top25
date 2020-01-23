import React, { Component } from 'react';
import './App.css';
import DisplayChar from './components/DisplayAlbum';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      top_25: []
    };
  }

  componentDidMount() {
    this.getAlbums();
  }

  getAlbums = () => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    axios.get('https://rss.itunes.apple.com/api/v1/us/apple-music/top-albums/all/25/explicit.json')
      .then(data => {
        this.setState({ top_25: data.results })
      })
      .catch(err => {
        throw new Error(err);
      })
    // fetch(URL)
    //   .then(res => {
    //     return res.json();
    //   })
    //   .then(data => {
    //     this.setState({ top_25: data.results });
    //   })
    //   .catch(err => {
    //     throw new Error(err);
    //   });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">Top 25 Albums</h1>
        <DisplayChar 
          top_25={this.state.top_25}
        />
      </div>
    );
  }
}

export default App;
