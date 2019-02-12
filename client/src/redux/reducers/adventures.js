import {
    GET_ADVENTURES,
    GET_ADVENTURE,
    ADD_ADVENTURE,
    ADVENTURE_ERROR,
    UPVOTE_ADV,
    DOWNVOTE_ADV,
    FILTER_ADVENTURES,
    GET_SCENES
} from '../actions/adventures'

const initialState = {
    routeScenes: [],
    fetchingAdventures: true,
    adventures: null,
    singleAdvent: null,
    fetchError: null,
    fetchingAdvent: true,
    type: "tags",
    filterPhrase: ""
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
                fetchingAdventures: false,
                singleAdvent: action.payload,
                routeScenes: action.routeScenes
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
                adventures: state.adventures ? state.adventures.map(adventure => {
                    return {
                        ...adventure,
                        adv_votes: adventure.adventure_id == action.payload ?
                            adventure.adv_votes + 1 :
                            adventure.adv_votes
                    }
                }) :
                    state.adventures,
                singleAdvent: state.singleAdvent ? {
                    ...state.singleAdvent,
                    adv_votes: state.singleAdvent.adv_votes + 1
                } :
                    state.singleAdvent
            }
        case DOWNVOTE_ADV:
            return {
                ...state,
                adventures: state.adventures ? state.adventures.map(adventure => {
                    return {
                        ...adventure,
                        adv_downvotes: adventure.adventure_id == action.payload ?
                            adventure.adv_downvotes + 1 :
                            adventure.adv_downvotes
                    }
                }) :
                    state.adventures,
                singleAdvent: state.singleAdvent ? {
                    ...state.singleAdvent,
                    adv_downvotes: state.singleAdvent.adv_downvotes + 1
                } :
                    state.singleAdvent
            }
        case FILTER_ADVENTURES:
            return {
                ...state,
                type: action.payload.type,
                filterPhrase: action.payload.filterPhrase
            }
        case GET_SCENES:
            return {
                ...state,
                routeScenes: action.payload
            }
        default:
            return state
    }
}