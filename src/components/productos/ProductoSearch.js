import React, { useEffect } from "react";
import queryString from "query-string";
import { useLocation } from "react-router";
import { useForm } from "../../hook/useForm";
import { useDispatch, useSelector } from "react-redux";
import { busquedaProducto } from "../../actions/carrito";

export const ProductoSearch = (history) => {
	const { producto } = useSelector((state) => state.producto);

	const location = useLocation();
	const dispatch = useDispatch();

	const { q = "" } = queryString.parse(location.search);

	const [formValues, handleInputChange] = useForm({
		searchText: q,
	});

	const { searchText } = formValues;

	useEffect(() => {
		history.push(`?q=${searchText}`);

		dispatch(busquedaProducto(searchText.toLocaleLowerCase()));
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchText, dispatch]);

	return (
		<div className="mb-5">
			<div className="col-12 mb-2">
				<span className="searchNav">
					<i className="fas fa-search"></i>
				</span>
				<input
					type="text"
					className="form-control searchProducto w-100"
					name="searchText"
					value={searchText}
					onChange={handleInputChange}
					placeholder="Buscar producto"
					autoComplete="off"
				/>
			</div>
			<hr></hr>
			<div className="d-flex flex-row-reverse">
				<div>
					<span className="fw-bold">
						{producto && producto.filter((p) => p.activo).length}
					</span>{" "}
					Items seleccionados
				</div>
			</div>
			<hr></hr>
		</div>
	);
};
