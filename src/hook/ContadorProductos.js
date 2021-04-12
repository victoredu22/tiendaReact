import { useState } from "react";

export const ContadorProductos = (initialState = {}) => {
	const [producto, setProducto] = useState( initialState );

	const restaProducto = () => {
		if (producto.enCarroCompras >= 0) {
			setProducto({
				...producto,
				enCarroCompras: producto.enCarroCompras - 1,
        precioTotalProducto:totalProducto(producto.enCarroCompras - 1) 
			});
		}
	};

  const sumaProducto = ()=>{
    if(producto.enCarroCompras >= 0){
      setProducto({
				...producto,
				enCarroCompras: producto.enCarroCompras + 1,
        precioTotalProducto:totalProducto(producto.enCarroCompras + 1) 
			});
    }
  }

  const totalProducto = (factor)=>{
    return producto.precio * factor
  }

	return [producto, restaProducto, sumaProducto];
};
