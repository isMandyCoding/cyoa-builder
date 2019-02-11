import { connect } from 'react-redux'
import AdventuresList from '../../components/AdventuresList'
import { getAdventures } from '../actions/adventures'

const mapStateToProps = state => {
    return {
        adventures: state.adventures.adventures,
        fetchingAdventures: state.adventures.fetchingAdventures,
        type: state.adventures.type,
        filterPhrase: state.adventures.filterPhrase
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAdventures: () => {
            dispatch(
                getAdventures()
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdventuresList)