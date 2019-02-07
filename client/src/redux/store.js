import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/rootreducer'
import logger from 'redux-logger'

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        logger,
    )
)

export default store