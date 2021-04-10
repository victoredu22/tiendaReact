import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStockMarca } from "../../actions/marca";
import { productoActivos } from "../../actions/producto";
import { StockEntries } from "../disponibilidad/StockEntries";
import { MarcasEntries } from "../marcas/MarcasEntries";
import { ProductoContenido } from "../productos/ProductoContenido";


export const ContenidoScreen = () => {
	const { producto } = useSelector((state) => state.producto);
	const { marca } = useSelector(state => state.marca);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(productoActivos());
	}, [dispatch])
	
	useEffect(() => {
		dispatch(changeStockMarca(producto));
	
	}, [dispatch,producto])
	



	return (
		<section className="d-flex pt-5 pb-0 h-100 animate__animated animate__fadeIn">
			<div className="container ">
				<div className="row">
					<div className="mx-auto">
						<h4 className="fw-bold">Smartphones </h4>

						<hr />
					</div>
					<div className="col-lg-2">
						<div className="row">
							<div className="col-12">
								<h4 className="lead fw-bold">Marcas</h4>
								{marca &&
									<MarcasEntries data={marca} />
								}
							</div>
							<div className="col-12 py-4">
								<h4 className="lead fw-bold">Disponibilidad</h4>
								{producto &&
									<StockEntries data={producto} />
								}
							</div>
						</div>
					</div>
					<div className="col-lg-10">
						<div className="container align-self-center">
							<div className="row justify-content-md-center">
								{producto ? (
									<ProductoContenido data={producto} />
								) : (
									<></>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
