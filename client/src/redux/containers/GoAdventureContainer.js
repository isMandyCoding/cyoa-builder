import { connect } from 'react-redux'
import GoAdventure from '../../components/GoAdventure'
import { getAdventure } from '../actions/adventures'

const mapStateToProps = state => {
    return {
        fetchingAdvent: state.fetchingAdvent,
        singleAdvent: state.singleAdvent
    }
}

//need to write action getAdventure
const mapDispatchToProps = dispatch => {
    return {
        getAdventure: id => {
            dispatch(
                getAdventure(id)
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoAdventure)
