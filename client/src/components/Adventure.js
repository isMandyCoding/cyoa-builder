import React, { Component } from 'react'

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