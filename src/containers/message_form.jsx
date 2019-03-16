import React, { Component } from 'react';
import { format } from 'upath';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    return(
      <form action="">
        <input type="text"/>
        <input type="submit" value={this.state.value} onChange={this.handleChange}/>
      </form>
    );
  }
}