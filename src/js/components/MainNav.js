import React from "react";
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';

export default class MainNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <NavbarToggler onClick={this.toggle} />
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/csharp">C#</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/aspnet">ASP.NET</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/netcore">.NET Core</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/javascript">JavaScript</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/misc">Miscellaneous</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{padding: 0}} href="https://github.com/jreddington76/developer-articles" target="_blank"><img src="public/GitHub-Mark-Light-32px.png"/></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      // <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      //   <Link to="/">
      //     <span className="navbar-brand" href="#">Home</span>
      //   </Link >
      //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      //     <span className="navbar-toggler-icon"></span>
      //   </button>

      //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
      //     <ul className="navbar-nav mr-auto">
      //     <li className="nav-item">
      //         <Link to="/csharp">
      //           <span className="nav-link" href="#">C#</span>
      //         </Link>
      //       </li>
      //       <li className="nav-item">
      //         <Link to="/aspnet">
      //           <span className="nav-link" href="#">ASP.NET</span>
      //         </Link>
      //       </li>
      //       <li className="nav-item">
      //         <Link to="/netcore">
      //           <span className="nav-link" href="#">.NET Core</span>
      //         </Link>
      //       </li>
      //       <li className="nav-item">
      //         <Link to="/javascript">
      //           <span className="nav-link" href="#">JavaScript</span>
      //         </Link>
      //       </li>
      //       <li className="nav-item">
      //         <Link to="/misc">
      //           <span className="nav-link" href="#">Miscellaneous</span>
      //         </Link>
      //       </li>
      //     </ul>
      //     <form className="form-inline my-2 my-lg-0">
      //       <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      //       <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      //     </form>
      //   </div>
      // </nav>
    );
  }
}