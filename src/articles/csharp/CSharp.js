import React from 'react';
import { Row, Col, Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

import NavList from '../../js/components/NavList';
import Basics from './Basics';
import Classes from './Classes';
import Interfaces from './Interfaces';
import StackHeap from './StackHeap';
import Variables from './Variables';

class CSharp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            basicLinks: [
                {
                    id: 1,
                    href: '#valuetypes',
                    text: 'Value Types'
                },
                {
                    id: 2,
                    href: '#referencetypes',
                    text: 'Reference Types'
                },
                {
                    id: 3,
                    href: '#casing',
                    text: 'Casing'
                },
                {
                    id: 4,
                    href: '#comments',
                    text: 'Comments'
                }
            ],
            classLinks: [
                {
                    id: 1,
                    href: '#constructor',
                    text: 'Constructor'
                },
                {
                    id: 2,
                    href: '#abstractclass',
                    text: 'Abstract Class'
                }
            ]
        }
    }

    click() {
        this.setState({
            active: true
        });
    }

    render() {
        let classes = classnames({ active: this.state.active });
        return (
            <Row>
                <Col xs="12" md="2" className="left">
                    <Navbar id="content">
                        <Nav className="nav-pills flex-column">
                            <NavItem>
                                <NavLink href="#basics" className={classes} onClick={this.click.bind(this)}>Basics</NavLink>
                            </NavItem>
                            <NavList items={this.state.basicLinks} />
                            <NavItem>
                                <NavLink href="#classes">Classes</NavLink>
                            </NavItem>
                            <NavList items={this.state.classLinks} />
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