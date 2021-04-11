import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	changeStockCarrito,
	addProducto,
	addItemCarrito,
} from "../../actions/carrito";

export const ProductoContenido = (contenido) => {
	const { data } = contenido;
	const dispatch = useDispatch();

	const { carrito } = useSelector((state) => state.carrito);

	console.log(carrito.length > 0);

	useEffect(() => {
		if (carrito.length > 0) {
			localStorage.setItem("carrito", JSON.stringify(carrito));
		}
	}, [carrito]);

	const ingresoItem = (e, producto) => {
		e.preventDefault();

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
			{data.map(
				(m) =>
					m.activo && (
						<div className="col col-lg-3 mb-3" key={m.id}>
							<div className="w-75 align-self-center">
								<img {...m.imagen} alt="imgContenido" />
							</div>
							<div className="ms-3">
								<p className="lead">
									{m.titulo}
									<span className="text-primary">.</span>
								</p>
								<p>{m.descripcion}</p>
								<p>
									<span className="text-primary fw-bold">
										{m.precio}
									</span>
									<span> oferta</span>
								</p>
								{m.envio && (
									<p>
										<i className="fas fa-shipping-fast"></i>{" "}
										Envio gratis.
									</p>
								)}
								<div className="align-self-center">
									<button
										type="button"
										className="btn btn-outline-secondary"
										onClick={(e) => ingresoItem(e, m)}
									>
										<i
											className="fas fa-shopping-bag text-primary"
											aria-hidden="true"
										></i>{" "}
										Agregar al carro
									</button>
								</div>
							</div>
						</div>
					)
			)}
		</>
	);
};
