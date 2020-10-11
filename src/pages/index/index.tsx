import React from "react";
import ReactDOM from "react-dom";
import { Controller } from './controller';
import './index.scss';

class Root extends React.Component {
  private controller: Controller;
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.controller = new Controller();
  }
  render() {
    return (
      <h1>Welcome to Index Page</h1>
    );
  }
}

let domContainer = document.querySelector('#root');
ReactDOM.render(<Root />, domContainer);
