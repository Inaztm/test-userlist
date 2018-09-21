import _ from 'lodash';

import React, { Component } from 'react';

import { Search } from 'semantic-ui-react';

import testSearchData from '../helpers/testSearchData.js';
import formatDataForSearch from '../helpers/formatDataForSearch.js';

const initialState = { isLoading: false, results: [], value: '' };

class SearchContacts extends Component {

  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () => this.setState(initialState);

  handleResultSelect = (e, { result }) => this.props.selectContact(result.contact);

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      const reg = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = searchData => reg.test( testSearchData(searchData) );
      const filter = _.filter(this.props.contacts, isMatch);
      const endData = formatDataForSearch(filter);

      this.setState({
        isLoading: false,
        results: endData
      });
    }, 100);
  }

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <Search
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
        results={results}
        fluid
        value={value} />
    );
  }

}

export default SearchContacts;
