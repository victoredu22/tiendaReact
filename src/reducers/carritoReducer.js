import { types } from "../types/types";


const initialState = {
  carrito:[]
}

export const carritoReducer = (state = initialState, action)=>{
  switch (action.type) {
    case (types.loadCarrito):
      return{
        ...state,
        compra:action.payload
      };
    case (types.addCarrito):
      return{
        ...state,
        carrito:[...state.carrito, action.payload]
      }
    default:
      return state;
  }
}