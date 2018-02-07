import React from 'react';
import { Row, Col, Navbar, Nav, NavItem, NavLink } from 'reactstrap';

import Basics from './Basics';
import Classes from './Classes';
import Interfaces from './Interfaces';
import StackHeap from './StackHeap';
import Variables from './Variables';

class CSharp extends React.Component {
    render() {
        return (
            <Row>
                <Col xs="12" md="2" className="left">
                    <Navbar id="content">
                        <Nav className="nav-pills flex-column">
                            <NavItem>
                                <NavLink href="#basics">Basics</NavLink>
                            </NavItem>
                            <Nav className="nav-pills flex-column">
                                <NavItem>
                                    <NavLink href="#valuetypes" className="ml-3 my-1">Value Types</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#referencetypes" className="ml-3 my-1">Reference Types</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#casing" className="ml-3 my-1">Casing</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#comments" className="ml-3 my-1">Comments</NavLink>
                                </NavItem>
                            </Nav>
                            <NavItem>
                                <NavLink href="#classes">Classes</NavLink>
                            </NavItem>
                            <Nav className="nav-pills flex-column">
                            <NavItem>
                                    <NavLink href="#constructor" className="ml-3 my-1">Constructor</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#abstract" className="ml-3 my-1">Abstract Class</NavLink>
                                </NavItem>
                            </Nav>
                            <NavItem>
                                <NavLink href="#variables">Variables</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#interfaces">Interfaces</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#stackheap">Stack &amp; Heap</NavLink>
                            </NavItem>
                        </Nav>
                    </Navbar>
                </Col>

                <Col sm="12" md={{ size: 10, offset: 2 }}>
                    <div data-spy="scroll" data-target="#content" data-offset="0">
                        <article>
                            <h1>C#</h1>
                            <Basics />
                            <Classes />
                            <Variables />
                            <Interfaces />
                            <StackHeap />
                        </article>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default CSharp;