import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadSubTotal } from "../../actions/carrito";
import { CompraDetalle } from "./CompraDetalle";
import { ItemsEntries } from "./ItemsEntries";

export const CompraScreen = () => {
	const dispatch = useDispatch();
	const { carrito } = useSelector((state) => state.carrito);
	const { costos } = useSelector((state) => state.carrito);

	useEffect(() => {
		const valorSubtotal = carrito.map((item) => item.precioTotalProducto);

		const subTotal = valorSubtotal.reduce((sum, value) => sum + value, 0);

		dispatch(loadSubTotal({ subTotal }));
	}, [dispatch, carrito]);

	return (
		<section className="d-flex pb-0 h-100 animate__animated animate__fadeIn" >
			<div className="container divCompra mb-5" >
				<div className="row mp-5">
					{carrito.filter(c=> c.activo === false).length  === carrito.length  ? (
						<div className="container align-self-center">
							<div className="bg-grey text-center p-5 rounded w-75 mx-auto mb-5">
								<h3 className="">
									{" "}
									<i className="fas fa-shopping-cart"></i> No
									tienes compras en tu carrito
									<span className="text-primary">.</span>
								</h3>

								<a className="btn btn-primary" href={"/"}>
									<i className="fas fa-plus"></i> Agregar
									nuevos productos
								</a>
							</div>
						</div>
					) : (
						<>
							<div className="col-lg-8 ">
								<div className="bg-grey p-3 rounded">
									{carrito.map((items, key) => (
										(items.activo)  &&
									
										<ItemsEntries
											key={key}
											data={items}
											validadorItem={
												key >= 1 && carrito.filter(c=> c.activo === true).length >= 2 ? true : false
											}
										/>
									))}
								</div>
							</div>
							<div className="col-lg-4">
								<CompraDetalle data={costos} />
							</div>
						</>
					)}
				</div>
			</div>
		</section>
	);
};
