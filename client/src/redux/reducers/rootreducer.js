import { combineReducers } from 'redux'

import { adventures } from './adventures'
import { decisions } from './decisions'

//will need to import all the reducers here, and combine them all

export default combineReducers({
    adventures,
    decisions
})