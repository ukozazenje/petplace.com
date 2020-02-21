import React, { Component } from 'react';
import { navigate } from 'gatsby'

class NavigationSearch extends Component {

  handleSearch = (e) => {
    if (e.which === 13 || e.keyCode === 13) {
      // Reset session storage for sorting posts in case someone was on search page went to one post and now want's to make search from header search field
      sessionStorage.setItem('selectValue', "")
      navigate(
        '/search',
        {
          state: {
            title: e.target.value,
          }
        }
      )
    }
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Search for Posts...."
        className="navigation-search"
        onKeyPress={(e) => this.handleSearch(e)}
      />
    )
  }
}

export default NavigationSearch;
