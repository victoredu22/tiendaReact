import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toastr from "toastr";
import { addItemCarrito, addProducto, changeStockCarrito } from "../../actions/carrito";


export const AddProductoBtn = (producto) => {

	const dispatch = useDispatch();
  const { carrito } = useSelector((state) => state.carrito);

	useEffect(() => {
		if (carrito.length > 0) {
			localStorage.setItem("carrito", JSON.stringify(carrito));
		}
	}, [carrito]);

	
	const ingresoItem = (e) => {
		e.preventDefault();

		toastr.success("Producto agregado con exito.");

		if (carrito.length === 0) {
			dispatch(addProducto(producto));
		} else {
			const x = carrito.find((item) => item.id === producto.id);

			x !== undefined
				? dispatch(
						changeStockCarrito([
							{ ...x, enCarroCompras: x.enCarroCompras++ },
						])
				  )
				: dispatch(addItemCarrito({ ...producto, enCarroCompras: 1 }));
		} 
	};
 


	return (
		<>
			<button
				type="button"
				className="btn btn-outline-secondary"
			 	onClick={ingresoItem} 
			>
				<i
					className="fas fa-shopping-bag text-primary"
					aria-hidden="true"
				></i>{" "}
				Agregar al carro
			</button>
		</>
	);
};
