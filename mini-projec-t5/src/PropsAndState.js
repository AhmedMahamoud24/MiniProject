import React, { Component } from 'react';

class PropsAndState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'message'
    };
  }

  render() {
    return (
      <div>
        <h2>{this.props.greeting}</h2>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default PropsAndState;