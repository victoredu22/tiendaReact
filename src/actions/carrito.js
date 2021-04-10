import { types } from "../types/types";

export const loadCarrito = (carrito)=>({
  type:types.loadCarrito,
  payload:carrito
})
export const addProducto = (payload)=>({
  type:types.addCarrito,
  payload
})


