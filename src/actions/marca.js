import { types } from "../types/types";

export const changeStockMarca = (productos)=>({
  type:types.changeMarca,
  payload:productos
})