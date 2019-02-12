import { connect } from 'react-redux'
import Adventuring from '../../components/Adventuring'
import { getAdventure, getDialogue } from '../actions/adventures'
import { handleNext, handleBack } from '../actions/decisions'

const mapStateToProps = state => {
    return {
        adventure: state.adventures.singleAdvent,
        fetchingAdventures: state.adventures.fetchingAdventures,
        routeDialogue: state.adventures.routeDialogue,
        currentRoute: state.decisions.currentRoute,
        currentDialogue: state.decisions.currentDialogue
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
        },
        handleNext: () => {
            dispatch(
                handleNext()
            )
        },
        handleBack: () => {
            dispatch(
                handleBack()
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Adventuring)