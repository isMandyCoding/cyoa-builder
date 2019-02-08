import { GET_ADVENTURES, GET_ADVENTURE, ADD_ADVENTURE, ADVENTURE_ERROR, UPVOTE_ADV, DOWNVOTE_ADV } from '../actions/adventures'

const initialState = {
    fetchingAdventures: true,
    adventures: null,
    singleAdvent: null,
    fetchError: null,
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
        case ADD_ADVENTURE:
            return {
                ...state
            }
        case ADVENTURE_ERROR:
            return {
                ...state,
                fetchError: true
            }
        case UPVOTE_ADV:
            return {
                ...state,
                adventures: state.adventures.map(adventure => {
                    return {
                        ...adventure,
                        adv_votes: adventure.adv_votes + 1
                    }
                })
            }
        case DOWNVOTE_ADV:
            return {
                ...state,
                adventures: state.adventures.map(adventure => {
                    return {
                        ...adventure,
                        adv_downvotes: adventure.adv_downvotes + 1
                    }
                })
            }
        default:
            return state
    }
}