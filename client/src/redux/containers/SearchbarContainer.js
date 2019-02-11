import { connect } from 'react-redux'
import SearchBar from '../../components/SearchBar'
import { filterAdventures } from '../actions/adventures'

const mapStateToProps = state => {
    return {
        type: state.adventures.type,
        filterPhrase: state.adventures.filterPhrase

    }
}

const mapDispatchToProps = dispatch => {
    return {
        filterAdventures: filterObj => {
            dispatch(
                filterAdventures(filterObj)
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)