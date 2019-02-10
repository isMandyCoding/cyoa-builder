import { connect } from 'react-redux'
import Adventuring from '../../components/Adventuring'
import { getAdventure } from '../actions/adventures'

const mapStateToProps = state => {
    return {
        adventure: state.adventures.singleAdvent,
        fetchingAdventures: state.adventures.fetchingAdventures
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAdventure: id => {
            dispatch(
                getAdventure(id)
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Adventuring)