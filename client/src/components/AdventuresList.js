import React, { Component, PropTypes } from 'react'
import Adventure from './Adventure'
import { Row } from 'reactstrap'

class AdventuresList extends Component {
    componentDidMount() {
        this.props.getAdventures()
    }
    render() {
        const { adventures, fetchingAdventures } = this.props
        if (fetchingAdventures) return <div>Loading...</div>
        if (adventures) {
            return (
                <div>
                    <h1>Come dive into an adventure!</h1>
                    <Row>
                        {adventures.map(adventure => <Adventure key={adventure.adventure_id} adventure={adventure} />)}
                    </Row>
                </div>
            )
        }
    }
}

AdventuresList.propTypes = {

}

export default AdventuresList