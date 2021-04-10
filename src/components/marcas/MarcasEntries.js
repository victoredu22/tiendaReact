import React from "react";
import { useDispatch } from "react-redux";
import { changeActivo, productoActivos } from "../../actions/producto";

export const MarcasEntries = (marcas) => {
	const {data} = marcas;
	const dispatch = useDispatch();
	
	const handleMarca = (e, param) => {
		e.preventDefault();
		dispatch(changeActivo(param));
  };

	const handleLimpiarFiltro = (e)=>{
		e.preventDefault();

		dispatch(productoActivos());
	}
	return (
		<>
			{
				(data) &&
				data.map((m) => (
				<div className="row" key={m.id}>
					<div
						className="col float-left seleccionDiv"
						onClick={(e) => handleMarca(e, m)}
					>
						<span>{m.titulo}</span>
					</div>
					<div className="col loat-right">
						<span className="spanStock">({m.cantidad})</span>
					</div>
				</div>
			))
			} 
			<a href="#!" onClick={(e)=>handleLimpiarFiltro(e)} >Limpiar filtro</a>
		</>
	);
};
