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
                    <NavLink className="text-white" tag={Link} to="/" >Home</NavLink>
                    <NavLink className="text-white" tag={Link} to="/new/adventure" >Create Adventure</NavLink>
                </Nav>
            </Navbar>
        )
    }
}

export default Navigation