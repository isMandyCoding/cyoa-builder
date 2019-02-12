
export const MAKE_DECISION = 'MAKE_DECISION'
export const makeDecision = routeID => dispatch => {
    fetch(`http://127.0.0.1:8000/adventures/routes/one/${routeID}`)
        .then(response => response.json())
        .then(route => {
            dispatch({
                type: MAKE_DECISION,
                payload: route
            })
        })
        .catch(err => console.log(err))
}

export const NEXT_DIALOGUE = 'NEXT_DIALOGUE'
export const handleNext = () => {
    return async dispatch => {
        dispatch({
            type: NEXT_DIALOGUE
        })
    }
}

export const BACK_DIALOGUE = 'BACK_DIALOGUE'
export const handleBack = () => {
    return async dispatch => {
        dispatch({
            type: BACK_DIALOGUE
        })
    }
}
export const RESET_DIALOGUE = 'RESET_DIALOGUE'
export const resetDialogue = () => {
    return async dispatch => {
        dispatch({
            type: RESET_DIALOGUE
        })
    }
}

export const RESET_CURRENTROUTE = 'RESET_CURRENTROUTE'
export const resetCurrentRoute = () => {
    return async dispatch => {
        dispatch({
            type: RESET_CURRENTROUTE
        })
    }
}