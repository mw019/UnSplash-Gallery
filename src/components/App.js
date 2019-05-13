import React, { Component } from 'react';
import { Header, Icon } from 'semantic-ui-react';
import './App.css';

import api from '../unsplashApi/api';
import SearchBar from './SearchBar';
import ImageDisplay from './ImageDisplay';

class App extends Component {
  state = {
    images: []
  };

  searchQuery = async input => {
    const response = await api.get('/search/photos', {
      params: { query: input, per_page: 100, orientation: 'squarish' }
    });

    // console.log(response.data.results);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className='ui container'>
        <div className='icon-div'>
          <Header as='h2' className='icon-header'>
            <Icon name='images' />
            <Header.Content>
              UnSplash Gallery
              <Header.Subheader>Free high-resolution photos</Header.Subheader>
            </Header.Content>
          </Header>
          <hr />
        </div>
        <div className='margin'>
          <SearchBar onSearchSubmit={this.searchQuery} />
        </div>

        <div className='margin'>
          <ImageDisplay images={this.state.images} />
        </div>
      </div>
    );
  }
}

export default App;
