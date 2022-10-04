import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: 1
    };
  }

  render() {
    return (
      <>
        <div className="container py-4 px-3 mx-auto">
          <h1>Hello, Bootstrap and Webpack!</h1>
          <button className="btn btn-primary">Primary button</button>
        </div>

      </>
    );
  }
}
