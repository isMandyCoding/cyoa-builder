import { connect } from 'react-redux'
import Decision from '../../components/Decision'
import { getDecisions } from '../actions/adventures'

const mapStateToProps = state => {
    return {
        adventure: state.adventures.singleAdvent,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDecisions: dialogueId => {
            dispatch(
                getDecisions(dialogueId)
            )
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Decision)