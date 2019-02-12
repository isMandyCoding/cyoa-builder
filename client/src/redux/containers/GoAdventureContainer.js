import { connect } from 'react-redux'
import GoAdventure from '../../components/GoAdventure'
import { getAdventure } from '../actions/adventures'
import { resetDialogue, resetCurrentRoute } from '../actions/decisions'

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
        resetDialogue: () => {
            dispatch(
                resetDialogue()
            )
        },
        resetCurrentRoute: () => {
            dispatch(
                resetCurrentRoute()
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoAdventure)
