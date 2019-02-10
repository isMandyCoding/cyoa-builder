import React, { Component } from 'react'
import Adventure from '../components/Adventure'
import { upVoteAdventure, downVoteAdventure } from '../redux/actions/adventures'

class GoAdventure extends Component {
    componentDidMount() {
        this.props.getAdventure(Number(this.props.match.params.adventure_id))
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