import React from "react";
import { useDispatch } from "react-redux";
import { changeActivoStock, changeActivoSinStock, productoActivos } from "../../actions/producto";

export const StockEntries = (producto) => {
	const { data } = producto;
	const dispatch = useDispatch();

	const arrayDisponibilidad = [
		{
			id: 0,
			titulo: "stock",
			stock: data.filter((p) => p.stock > 0).length,
			metodoDispatch: changeActivoStock(),
		},
		{
			id: 1,
			titulo: "sin stock",
			stock: data.filter((p) => p.stock === 0).length,
			metodoDispatch : changeActivoSinStock(),
		},
	];

	const handleStock = (e,metodoDispatch)=>{
		e.preventDefault();

		dispatch(metodoDispatch);
	}

	const handleLimpiarFiltro = (e)=>{
		e.preventDefault();
		dispatch(productoActivos());
	}
	return (
		<>
			{arrayDisponibilidad &&
				arrayDisponibilidad.map((d) => (
					<div className="row" key={d.id}>
						<div 
							className="col float-left seleccionDiv"
							onClick={(e) => handleStock(e,d.metodoDispatch)}

						>{d.titulo}</div>
						<div className="col loat-right">
							<span className="spanStock">({d.stock})</span>
						</div>
					</div>
				))}
				<a href="#!" onClick={(e)=>handleLimpiarFiltro(e)} >Limpiar filtro</a>
		</>
	);
};
