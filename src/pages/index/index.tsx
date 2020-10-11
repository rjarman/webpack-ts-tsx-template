import React from "react";
import ReactDOM from "react-dom";
import { ServerConnector } from '../../libs/ServerConnector';
import './index.scss';

class LikeButton extends React.Component {
  private serverConnector: ServerConnector;
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.serverConnector = new ServerConnector();
  }
  render() {
    return (
      <h1>Welcome to Index Page</h1>
    );
  }
}

let domContainer = document.querySelector('#root');
ReactDOM.render(<LikeButton />, domContainer);
