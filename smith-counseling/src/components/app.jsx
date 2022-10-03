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
        <div className="card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Lorem mafuckin Ipsum</li>
            <li className="list-group-item">Big Pimpin</li>
            <li className="list-group-item">Spend the cheese</li>
          </ul>
        </div>
      </>
    );
  }
}
