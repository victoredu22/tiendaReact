import { useState } from 'react'

export const ContadorProductos = (producto,operacion) => {
  
  const [cantidad, setCantidad] = useState(producto);
  console.log(cantidad);
  
  const resta = ()=>{
    setCantidad([{
      ...cantidad,
      enCarroCompras:cantidad.enCarroCompras--
    }])
  }

  return [ cantidad , resta];

}
