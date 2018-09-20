import _ from 'lodash';

import React, { Component } from 'react';

import formatName from './helpers/formatName.js'

import { Search } from 'semantic-ui-react';

import NavigationWrapper from './components/NavigationWrapper';
import NavigationMenu from './components/NavigationMenu';
import NotSelected from './components/NotSelected';
import ContactDetail from './components/ContactDetail';

import ContactsListContainer from './containers/ContactsListContainer';

const initialState = { isLoading: false, results: [], value: '' };

class App extends Component {
  componentWillMount() {
    this.resetComponent();
  }

  componentDidMount() {
    this.props.fetchContacts();
  }

  resetComponent = () => this.setState(initialState);

  handleResultSelect = (e, { result }) => this.setState({ value: result.title });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = ({ general, job }) => re.test([general.firstName, general.lastName, job.title]);
      const filter = _.filter(this.props.contacts, isMatch);
      const endData = [];
      
      _.map(filter, ({ general, job }) => {
        let title = formatName(general.firstName, general.lastName, ' ');

        endData.push({ title, description: job.title });
      });

      this.setState({
        isLoading: false,
        results: endData
      });
    }, 100);
  }

  render() {
    const { isLoading, value, results } = this.state;
    const { contacts } = this.props;

    const contentStyles = { width: '100%' };

    const Detail = (
      this.props.selectedContact === null ?
      <NotSelected /> :
      <ContactDetail contact={this.props.selectedContact} />
    )

    return (
      <div>
        <NavigationWrapper>
          <NavigationMenu>
            <Search
              loading={isLoading}
              onResultSelect={this.handleResultSelect}
              onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
              results={results}
              value={value}
              fluid={true} />
            <ContactsListContainer />
          </NavigationMenu>
          <main style={contentStyles}>
            {Detail}
          </main>
        </NavigationWrapper>
      </div>
    );
  }

}

export default App;
