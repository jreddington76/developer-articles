import React from 'react';
import { Container, Row, Col, Navbar, Nav, NavItem, NavLink } from 'reactstrap';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <Container>
                    <Row>
                        <Col sm="12" md={{ size: 3, offset: 1 }}>
                            <h3>Title</h3>
                            <hr />
                            <ul>
                                <li>List Item</li>
                                <li>List Item</li>
                                <li>List Item</li>
                                <li>List Item</li>
                                <li>List Item</li>
                                <li>List Item</li>
                            </ul>
                        </Col>
                        <Col sm="12" md={{ size: 3, offset: 1 }}>
                            <h3>Title</h3>
                            <hr />
                            <ul>
                                <li>List Item</li>
                                <li>List Item</li>
                                <li>List Item</li>
                                <li>List Item</li>
                                <li>List Item</li>
                                <li>List Item</li>
                            </ul>
                        </Col>
                        <Col sm="12" md={{ size: 3, offset: 1 }}>
                            <h3>Title</h3>
                            <hr />
                            <ul>
                                <li>List Item</li>
                                <li>List Item</li>
                                <li>List Item</li>
                                <li>List Item</li>
                                <li>List Item</li>
                                <li>List Item</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}

export default Footer;