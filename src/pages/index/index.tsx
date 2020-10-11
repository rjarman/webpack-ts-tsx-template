import React from "react";
import ReactDOM from "react-dom";
import './index.scss';

class LikeButton extends React.Component {
  render() {
    return (
      <h1>Welcome to Index Page</h1>
    );
  }
}

let domContainer = document.querySelector('#root');
ReactDOM.render(<LikeButton />, domContainer);
