import { types } from "../types/types";

export const loadProducto = (producto)=>({
  type:types.loadProducto,
  payload:producto
})