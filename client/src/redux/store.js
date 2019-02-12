import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/rootreducer'
import logger from 'redux-logger'

const middleware = [thunkMiddleware, logger
]

const store = createStore(
    rootReducer,
    applyMiddleware(
        ...middleware
    )
)

export default store