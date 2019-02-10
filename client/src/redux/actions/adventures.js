
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
    console.log("this is the get adventure action: ", id)
    return async dispatch => {
        fetch(`http://127.0.0.1:8000/adventures/${id}`)
            .then(response => response.json())
            .then(adventure => {
                dispatch({
                    type: GET_ADVENTURE,
                    payload: adventure
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
                console.log("downvoted id: ", response[0])
                dispatch({
                    type: DOWNVOTE_ADV,
                    payload: response[0]
                })
            })
            .catch(err => console.log(err))
    }
}
