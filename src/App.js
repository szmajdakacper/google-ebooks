import React, { Component } from 'react';
import axios from 'axios';
import styleClasses from './App.module.css';

import Header from './components/layout/Header';
import Search from './components/forms/Search';
import Books from './components/layout/Books';
import Pagination from './components/layout/Pagination';
import Footer from './components/layout/Footer';

export class App extends Component {
  state = {
    q: [],
    freeEbooks: false,
    booksPerPage: 6,
    currentPage: 1,
    items: [],
  }

  makeGetRequest = () => {
    //URL:
    let url = 'https://www.googleapis.com/books/v1/volumes?q=' + this.state.q
      + '&maxResults=' + this.state.booksPerPage
      + '&startIndex=' + ((this.state.currentPage - 1) * this.state.booksPerPage);
    if (this.state.freeEbooks) {
      url += '&filter=free-ebooks';
    }

    // Make a request
    this.setState({ items: [] });

    axios.get(url)
      .then(res => {
        if (!res.data.hasOwnProperty('items')) {
          return this.setState({ currentPage: 1 }, function () {
            this.makeGetRequest();
          });
        }
        this.setState({ items: res.data.items });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  submittedHandler = (event) => {
    event.preventDefault();
    this.setState({ currentPage: 1 }, function () {
      this.makeGetRequest();
    });
  }

  changedHandler = (event) => {
    this.setState({ q: event.target.value });
  }

  changePageHandler = (event, pageNumber) => {
    event.preventDefault();
    if (pageNumber >= 1) {
      this.setState({ currentPage: pageNumber }, function () {
        this.makeGetRequest();
      });
    }
  }

  checkboxHandler = () => {
    this.setState({ freeEbooks: !this.state.freeEbooks });
  }

  render() {
    return (
      <div className={styleClasses.App}>
        <Header />
        <Search
          q={this.state.q}
          submittedHandler={this.submittedHandler}
          changedHandler={this.changedHandler}
          checkboxHandler={this.checkboxHandler}
        />
        <Books items={this.state.items} />
        <Pagination
          currentPage={this.state.currentPage}
          itemsAmount={this.state.items.length}
          changePageHandler={this.changePageHandler}
        />
        <Footer />
      </div>
    )
  }
}

export default App

