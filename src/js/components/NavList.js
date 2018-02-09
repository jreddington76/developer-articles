import React from 'react';
import PropTypes from 'prop-types';
import { Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

class NavList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            hover: false
        };
        // this.click = this.click.bind(this);
        this.handleHover = this.handleHover.bind(this);
    }

    click(id) {
        this.setState(prevState => ({
            active: !prevState.active
        }));
        console.log(id)
    }

    handleHover() {
        this.setState(prevState => ({
            hover: !prevState.hover
        }));
    }

    render() {
        let classes = classnames('ml-3', 'my-1', { active: this.state.active || this.state.hover });
        const listItems = this.props.items.map((item) =>
            <NavItem key={item.id.toString()}>
                <NavLink href={'#' + item.text.replace(/\s+/g, '').toLowerCase()} className={classes} onClick={() => this.click(item.id)}>{item.text}</NavLink>
                {/* onMouseEnter={this.handleHover(key)} onMouseLeave={this.handleHover(key)}>{item.text}</NavLink> */}
            </NavItem>
        );

        return (
            <Nav className="nav-pills flex-column">
                {listItems}
            </Nav>
        );
    }
}

NavList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object)
};

export default NavList;