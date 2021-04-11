import { types } from "../types/types";

export const addProducto = (payload)=>({
  type:types.loadCarrito,
  payload
})

export const changeStockCarrito = (payload)=>({
  type:types.changeStockCarrito,
  payload
})

export const addItemCarrito = (payload)=>({
  type: types.addItemCarrito,
  payload
})

export const loadStorageCarrito = (payload)=>({
  type:types.loadItemsStorage,
  payload
})