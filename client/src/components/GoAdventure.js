import React, { Component } from 'react'
import Adventure from '../components/Adventure'

class GoAdventure extends Component {
    componentDidMount() {
        this.props.getAdventure(Number(this.props.match.params.adventure_id))
        this.props.resetDialogue()
        this.props.resetCurrentRoute()

    }

    render() {
        const { adventure, fetchingAdventures } = this.props
        if (fetchingAdventures) {
            return <div>Loading...</div>
        } else if (adventure) {
            return (
                <div>
                    <Adventure adventure={adventure} onAdventure={true} />
                </div>
            )
        } else {
            return null
        }
    }
}

export default GoAdventure