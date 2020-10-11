import React from "react";
import ReactDOM from "react-dom";
import { Controller } from './controller';
import './index.scss';

class Root extends React.Component {
<<<<<<< HEAD
  private controller: Controller;
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.controller = new Controller();
=======
  private serverConnector: Controller;
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.serverConnector = new Controller();
>>>>>>> master
  }
  render() {
    return (
      <h1>Welcome to Index Page</h1>
    );
  }
}

let domContainer = document.querySelector('#root');
ReactDOM.render(<Root />, domContainer);
