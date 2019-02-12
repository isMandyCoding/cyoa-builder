
export const GET_ADVENTURES = 'GET_ADVENTURES';
export const getAdventures = () => {
    return async dispatch => {
        fetch('http://127.0.0.1:8000/index')
            .then(response => response.json())
            .then(adventures => {
                dispatch({
                    type: GET_ADVENTURES,
                    payload: adventures.adventures
                })
            })
            .catch(err => console.log(err))
    }
}

export const GET_ADVENTURE = 'GET_ADVENTURE'
export const getAdventure = id => {
    return async dispatch => {
        fetch(`http://127.0.0.1:8000/adventures/${id}`)
            .then(response => response.json())
            .then(adventure => {
                let routeId = Number(adventure.routes.find(route => route.isInitialRoute).route_id)
                fetch(`http://127.0.0.1:8000/adventures/routes/one/${routeId}`)
                    .then(routeScenes => routeScenes.json())
                    .then(jsonrouteScenes => {
                        dispatch({
                            type: GET_ADVENTURE,
                            payload: adventure,
                            routeScenes: jsonrouteScenes
                        })
                    })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const ADD_ADVENTURE = 'ADD_ADVENTURE';
export const ADVENTURE_ERROR = 'ADVENTURE_ERROR'
export const addAdventure = newAdventure => {
    console.log(newAdventure)
    return async dispatch => {
        fetch('http://127.0.0.1:8000/adventures/new', {
            method: 'POST',
            body: JSON.stringify(newAdventure),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => response.json())
            .then(response => {
                dispatch({
                    type: ADD_ADVENTURE,
                    payload: response
                })
            })
            .catch(err => {
                dispatch({
                    type: ADVENTURE_ERROR,
                    payload: err
                })
            })
    }
}

export const UPVOTE_ADV = 'UPVOTE_ADV'
export const upVoteAdventure = id => {
    return async dispatch => {
        fetch(`http://127.0.0.1:8000/adventures/upvote/${id}`, {
            method: 'PATCH'
        })
            .then(response => response.json())
            .then(response => {
                dispatch({
                    type: UPVOTE_ADV,
                    payload: response[0]
                })
            })
            .catch(err => console.log(err))
    }
}

export const DOWNVOTE_ADV = 'DOWNVOTE_ADV'
export const downVoteAdventure = id => {
    return async dispatch => {
        fetch(`http://127.0.0.1:8000/adventures/downvote/${id}`, {
            method: 'PATCH'
        })
            .then(response => response.json())
            .then(response => {
                dispatch({
                    type: DOWNVOTE_ADV,
                    payload: response[0]
                })
            })
            .catch(err => console.log(err))
    }
}

export const FILTER_ADVENTURES = 'FILTER_ADVENTURES'
export const filterAdventures = filterObj => {
    return dispatch => {
        dispatch({
            type: FILTER_ADVENTURES,
            payload: filterObj
        })
    }
}


export const GET_SCENES = 'GET_SCENES';
export const getScenes = routeId => {
    console.log("we made it to the getScens action and this is the id: ", routeId)
    fetch(`http://127.0.0.1:8000/adventures/routes/one/${routeId}`)
        .then(response => response.json())
        .then(routeScenes => {
            return dispatch => {
                dispatch({
                    type: GET_SCENES,
                    payload: routeScenes
                })
            }
        })
        .catch(err => console.log(err))
}

export const GET_DIALOGUE = 'GET_DIALOGUE'
export const getDialogue = routeId => dispatch => {
    console.log("this is the routeID passed to the getDialogue function: ", routeId)
    //need to alter backend route to give all associated dialogue for a route
    fetch(`http://127.0.0.1:8000/adventures/routes/one/${routeId}`)
        .then(response => response.json())
        .then(routeDialogue => {
            console.log(routeDialogue)
            dispatch({
                type: GET_DIALOGUE,
                payload: routeDialogue
            })
        })
        .catch(err => console.log(err))

}

export const GET_DECISIONS = 'GET_DECISIONS'
export const getDecisions = dialogueId => dispatch => {
    // fetch(``)
}