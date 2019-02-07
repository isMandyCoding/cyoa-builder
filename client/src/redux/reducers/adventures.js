import { GET_ADVENTURES, GET_ADVENTURE } from '../actions/adventures'

const initialState = {
    fetchingAdventures: true,
    adventures: null,
    singleAdvent: null,
    fetchingAdvent: true
}

export const adventures = (state = initialState, action) => {
    switch (action.type) {
        case GET_ADVENTURES:
            return {
                ...state,
                fetchingAdventures: false,
                adventures: action.payload
            }
        case GET_ADVENTURE:
            return {
                ...state,
                fetchingAdvent: false,
                singleAdvent: action.payload
            }
        default:
            return state
    }
}