import React, { Component } from 'react';
import Search from './search';
import List from './list';

class App extends Component {
  constructor() {
    super();

    this.state = {
      query: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    e.preventDefault();

    this.setState({
      query: e.target.value,
    })
  }

  searchHistoricalData(query) {
    
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


