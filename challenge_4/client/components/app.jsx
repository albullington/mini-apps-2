import React, { Component } from 'react';
import axios from 'axios';

import Search from './search';
import List from './list';

class App extends Component {
  constructor() {
    super();

    this.state = {
      query: '', 
      data: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    e.preventDefault();

    this.setState({
      query: e.target.value,
    })

    this.searchHistoricalData(e.target.value);
  }

  searchHistoricalData(query) {
    axios.get(`http://localhost:3000/events?q=${query}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        throw err;
      })
  }

  render() {
    return (
      <div>
      <h4>Enter your search term to learn about historical events</h4>
      <Search handleChange={this.handleChange} />
      <hr />
      <List />
      </div>
    )
  }
};

export default App;


