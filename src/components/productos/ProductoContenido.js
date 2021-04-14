import React from "react";
import { formatDecimal } from "../../helper/precioString";
import { AddProductoBtn } from "./AddProductoBtn";

export const ProductoContenido = (contenido) => {
	const { data } = contenido;

	console.log(data.filter(d=>d.activo).length);

	return (
		<>
			{
			(data.filter(d=>d.activo).length === 0) 
			?
			<div className="container align-self-center">
			<div className="bg-grey text-center p-4 rounded w-75 mx-auto mb-2">
				<h4 className="">
					{" "}
					<i className="fas fa-search"></i> No
					se han encontrado coincidencias
					<span className="text-primary">.</span>
				</h4>
			</div>
		</div>
			:
				data.map(
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
										${formatDecimal(m.precio)}
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
									<AddProductoBtn {...m} />
								</div>
							</div>
						</div>
					)
			)}
		</>
	);
};
