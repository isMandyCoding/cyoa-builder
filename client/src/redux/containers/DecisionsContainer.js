import { connect } from 'react-redux'
import Decisions from '../../components/Decisions'
import { getDecisions } from '../actions/adventures'
import { makeDecision } from '../actions/decisions'

const mapStateToProps = state => {
    return {
        adventure: state.adventures.singleAdvent,
        dialogueDecisions: state.adventures.dialogueDecisions
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDecisions: dialogueId => {
            dispatch(
                getDecisions(dialogueId)
            )
        },
        makeDecision: routeId => {
            dispatch(
                makeDecision(routeId)
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Decisions)