import React, { Component } from 'react';
import axios from 'axios';

import Search from './search';
import List from './list';

class App extends Component {
  constructor() {
    super();

    this.state = {
      query: '',
      data: [],
      offset: 0,
      perPage: 3,
      pageCount: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick(data) {
    const {
      perPage,
      query,
    } = this.state;

    const { selected } = data;
    const offset = Math.ceil(selected * perPage);

    this.setState({ offset }, () => {
      this.searchHistoricalData(query);
    });
  }

  searchHistoricalData(query) {
    const {
      perPage,
      offset,
    } = this.state;
    axios.get(`http://localhost:3000/events?q=${query}&_page=${offset}&_limit=${perPage}`)
      .then((res) => {
        this.setState({
          data: res.data,
          pageCount: this.state.pageCount + 1,
        });
        console.log(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }

  handleChange(e) {
    e.preventDefault();

    this.setState({
      query: e.target.value,
    });

    this.searchHistoricalData(e.target.value, this.state.offset);
  }

  render() {
    const {
      query,
      data,
      pageCount,
    } = this.state;

    return (
      <div>
        <h4>Enter your search term to learn about historical events</h4>
        <Search handleChange={this.handleChange} />
        <hr />
        <List
          query={query}
          data={data}
          pageCount={pageCount}
          handlePageClick={this.handlePageClick}
        />
      </div>
    );
  }
}

export default App;

