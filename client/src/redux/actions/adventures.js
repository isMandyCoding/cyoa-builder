//EXAMPLE:
// export const PRODUCTS_RECEIVED = 'PRODUCTS_RECEIVED'
// export function fetchProducts() {
//   return async (dispatch) => {
//     const response = await fetch(`http://localhost:8082/api/products`)
//     const json = await response.json()
//     dispatch({
//       type: PRODUCTS_RECEIVED,
//       products: json._embedded.products
//     })
//   }
// }

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

