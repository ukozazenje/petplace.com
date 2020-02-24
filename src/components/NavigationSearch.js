import React, { Component } from 'react';
import { navigate } from 'gatsby'

class NavigationSearch extends Component {
  handleSearch = (e) => {
    if (e.which === 13 || e.keyCode === 13) {
      navigate(
        '/search',
        {
          state: {
            title: e.target.value
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
