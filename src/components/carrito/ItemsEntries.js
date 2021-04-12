import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeStockCarrito, deleteItemCarrito } from "../../actions/carrito";
import {
	precioString,
	totalProducto,
	formatDecimal,
} from "../../helper/precioString";
import { ContadorProductos } from "../../hook/ContadorProductos";

export const ItemsEntries = (data) => {
	const dispatch = useDispatch();

	const { data: itemsCarroCompra } = data;
	const itemsFormateados = {
		...itemsCarroCompra,
		precio: precioString(itemsCarroCompra.precio),
		precioTotalProducto: totalProducto(
			itemsCarroCompra.enCarroCompras,
			precioString(itemsCarroCompra.precio)
		),
	};

	const [producto, restaProducto, sumaProducto] = ContadorProductos(
		itemsFormateados
	);



	useEffect(() => {
		dispatch(changeStockCarrito(producto));
		const itemsLocal = JSON.parse(localStorage.getItem("carrito"));

		if (producto.enCarroCompras <= 0) {
			
	 	 	const dataLocal = itemsLocal.filter((item) =>
				item.id !== producto.id
			);
			localStorage.setItem("carrito", JSON.stringify(dataLocal)); 

			dispatch(deleteItemCarrito(producto)); 

		}else{
			const arrayLocal = itemsLocal.map((item) =>
				item.id === producto.id ? { ...producto } : { ...item }
			);
			localStorage.setItem("carrito", JSON.stringify(arrayLocal));
		}

		

	}, [dispatch, producto]);

	return (
		<>
	
			
			{itemsCarroCompra && (
				<>
				{data.validadorItem ? <hr></hr> :<></>}
				<div className="row">
		
					<div className="col-lg-8 float-left">
						<div className="d-flex mb-2">
							<div className="w-25 align-self-center">
								<img
									src={itemsCarroCompra.imagen.src}
									style={{ width: "80%" }}
									alt="img-contenido"
								/>
							</div>
							<div className="ms-3">
								<p className="lead">
									{itemsCarroCompra.titulo}
									<span className="text-primary">.</span>
								</p>
								<p>{itemsCarroCompra.description}</p>
								<p>
									<span className="text-primary fw-bold">
										${" "}
										{formatDecimal(itemsCarroCompra.precio)}
									</span>
									{itemsCarroCompra.oferta && (
										<span> oferta</span>
									)}
								</p>
								<p>
									{itemsCarroCompra && (
										<>
											<i
												className="fas fa-shipping-fast"
												aria-hidden="true"
											></i>
											Envio totalmente gratis.
										</>
									)}
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 align-self-center">
						<div className="text-center">
							<button
								type="button"
								className="btn btn-light"
								onClick={restaProducto}
							>
								<i className="fas fa-minus"></i>
							</button>
							{producto.enCarroCompras}
							<button
								type="button"
								className="btn btn-light"
								onClick={sumaProducto}
							>
								<i className="fas fa-plus"></i>
							</button>
						</div>
					</div>
				</div>
				</>
			)}
		</>
	);
};
