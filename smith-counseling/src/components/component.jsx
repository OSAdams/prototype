import React from 'react';

export default class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      example: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    // eslint-disable-next-line
    console.log(event.target);
  }

  render() {
    return (
      <>
        <h1 onClick={this.handleClick}>{this.state.example}</h1>
        <h2>{this.props.someProp}</h2>
      </>
    );
  }
}
