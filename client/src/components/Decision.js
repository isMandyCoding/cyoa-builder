import React, { Component } from 'react'
import { Button } from 'reactstrap'

class Decision extends Component {
    makeDecision = e => {
        this.props.makeDecision(this.props.decision.route_id)

    }

    render() {
        return (
            <Button onClick={this.makeDecision} >
                {this.props.decision.label}
            </Button>
        )
    }
}

export default Decision