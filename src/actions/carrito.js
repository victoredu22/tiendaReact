import { types } from "../types/types";

export const loadOrden = (carrito)=>({
  type:types.loadCarrito,
  payload:carrito
})
export const addProducto = (payload)=>({
  type:types.addCarrito,
  payload
})


