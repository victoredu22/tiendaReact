import { types } from "../types/types";

const initialState = {
  producto: []
}
export const producReducer = (state = initialState, action)=>{
  switch (action.type) {
    case types.loadProducto:
    return {
      ...state,
      producto:action.payload
    }
    default:
      return state;
  }
}