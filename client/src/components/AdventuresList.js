import React, { Component, PropTypes } from 'react'
import Adventure from './Adventure'
import { Row } from 'reactstrap'
import SearchBarContainer from '../redux/containers/SearchBarContainer'

class AdventuresList extends Component {
    componentDidMount() {
        this.props.getAdventures()
    }
    render() {
        const { adventures, fetchingAdventures } = this.props
        const sortedAdventures = adventures ?
            adventures.sort((a, b) => b.adv_votes - a.adv_votes)
                .filter(adventure => adventure[this.props.type].map(tag => tag.tag_name).join().toLowerCase().includes(this.props.filterPhrase.toLowerCase()))
            :
            null
        if (fetchingAdventures) {
            return <div>Loading...</div>
        } else if (sortedAdventures) {
            return (
                <div>
                    <SearchBarContainer />
                    <h1>Come dive into an adventure!</h1>
                    <Row>
                        {sortedAdventures.map(adventure => <Adventure key={adventure.adventure_id} adventure={adventure} />)}
                    </Row>
                </div>
            )
        } else {
            return null
        }
    }
}

AdventuresList.propTypes = {

}

export default AdventuresList