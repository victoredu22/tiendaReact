import { types } from "../types/types";

export const loadProducto = (producto)=>({
  type:types.loadProducto,
  payload:producto
})
export const changeActivo = (producto)=>({
  type:types.changeActive,
  payload:producto
})
export const changeActivoStock = ()=>({
  type:types.changeActivoStock,
})
export const changeActivoSinStock = ()=>({
  type:types.changeActivoSinStock
})
export const changeActivoFechaProxima = (fechaActual)=>({
  type:types.changeFechaProxima,
  payload:fechaActual
})

export const productoActivos = () =>({
  type:types.activosProductos
})