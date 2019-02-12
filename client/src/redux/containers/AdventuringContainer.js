import { connect } from 'react-redux'
import Adventuring from '../../components/Adventuring'
import { getAdventure, getDialogue } from '../actions/adventures'

const mapStateToProps = state => {
    return {
        adventure: state.adventures.singleAdvent,
        fetchingAdventures: state.adventures.fetchingAdventures,
        routeDialogue: state.adventures.routeDialogue
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAdventure: id => {
            dispatch(
                getAdventure(id)
            )
        },
        getDialogue: routeId => {
            dispatch(
                getDialogue(routeId)
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Adventuring)