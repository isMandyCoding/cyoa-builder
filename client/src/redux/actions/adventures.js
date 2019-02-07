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
