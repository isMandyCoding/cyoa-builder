import { GET_ADVENTURES } from '../actions/adventures'

const initialState = {
    fetchingAdventures: true,
    adventures: null
}

export const adventures = (state = initialState, action) => {
    switch (action.type) {
        case GET_ADVENTURES:
            return {
                ...state,
                fetchingAdventures: false,
                adventures: action.payload
            }
        default:
            return state
    }
}