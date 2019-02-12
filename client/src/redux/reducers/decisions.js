import { MAKE_DECISION, NEXT_DIALOGUE, BACK_DIALOGUE, RESET_DIALOGUE, RESET_CURRENTROUTE } from '../actions/decisions'

const initialState = {
    currentRoute: undefined,
    currentDialogue: 0
}

export const decisions = (state = initialState, action) => {
    switch (action.type) {
        case MAKE_DECISION:
            return {
                ...state,
                currentRoute: action.payload,
                currentDialogue: 0
            }
        case NEXT_DIALOGUE:
            return {
                ...state,
                currentDialogue: state.currentDialogue + 1
            }
        case BACK_DIALOGUE:
            return {
                ...state,
                currentDialogue: state.currentDialogue > 0 ? state.currentDialogue - 1 : state.currentDialogue
            }
        case RESET_DIALOGUE:
            return {
                ...state,
                currentDialogue: 0
            }
        case RESET_CURRENTROUTE:
            return {
                ...state,
                currentRoute: undefined
            }
        default:
            return state
    }
}

