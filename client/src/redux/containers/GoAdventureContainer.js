import { connect } from 'react-redux'
import GoAdventure from '../../components/GoAdventure'
import { getAdventure } from '../actions/adventures'

const mapStateToProps = state => {
    return {
        adventure: state.adventures.singleAdvent,
        fetchingAdventures: state.adventures.fetchingAdventures,
        routeScenes: state.adventures.routeScenes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAdventure: id => {
            dispatch(
                getAdventure(id)
            )
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoAdventure)
