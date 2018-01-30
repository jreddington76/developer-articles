import React from "react";
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

export default class Nav extends React.Component {
  render() {
    return (
      <ul className="nav nav-pills nav-fill">
      <li className="nav-item">
          <Link to="/">
            <span className="nav-link active">Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/netcore">
            <span className="nav-link">.NET Core</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/javascript">
            <span className="nav-link">JavaScript</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/angularjs">
            <span className="nav-link">AngularJS</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/reactjs">
            <span className="nav-link">ReactJS</span>
          </Link>
        </li>
      </ul>
    );
  }
}