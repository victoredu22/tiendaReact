import React from "react";
import { AddProductoBtn } from "./AddProductoBtn";

export const ProductoContenido = (contenido) => {
	const { data } = contenido;

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
									<AddProductoBtn {...m} />
								</div>
							</div>
						</div>
					)
			)}
		</>
	);
};
