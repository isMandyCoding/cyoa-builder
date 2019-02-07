import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';

class Adventure extends Component {
    render() {
        const { adventure } = this.props
        return (
            <div>
                {adventure.title}
            </div>
        )
    }
}

export default Adventure