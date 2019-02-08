import React, { Component } from 'react'
import {
    Navbar,
    Nav,
    NavLink
} from 'reactstrap'
import { Link } from 'react-router-dom'

class Navigation extends Component {
    render() {
        return (
            <Navbar>
                <Nav>
                    <NavLink tag={Link} to="/" >Home</NavLink>
                    <NavLink tag={Link} to="/new/adventure" >Create Adventure</NavLink>
                </Nav>
            </Navbar>
        )
    }
}

export default Navigation