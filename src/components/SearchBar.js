import React, { Component } from 'react';
import { Segment, Button, Icon, Form } from 'semantic-ui-react';

class SearchBar extends Component {
  state = { input: '' };

  onFormSubmit = e => {
    e.preventDefault();
    // console.log(this.state.input);
    this.props.onSearchSubmit(this.state.input);
  };

  render() {
    return (
      <div>
        <Segment inverted>
          <Form onSubmit={this.onFormSubmit} inverted>
            <Form.Field>
              <label>Search high-resolution photos</label>
              <input
                name='input'
                type='text'
                value={this.state.input}
                onChange={e => {
                  this.setState({ input: e.target.value });
                }}
                placeholder='eg. dogs'
              />
            </Form.Field>
            <Button
              animated='fade'
              className='fluid'
              type='submit'
              size='small'
            >
              <Button.Content hidden>Search</Button.Content>
              <Button.Content visible>
                <Icon name='search' />
              </Button.Content>
            </Button>
          </Form>
        </Segment>
      </div>
    );
  }
}

export default SearchBar;
