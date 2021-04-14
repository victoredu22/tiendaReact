import React from "react";
import { useSelector } from "react-redux";
import { formatDecimal } from "../../helper/precioString";
import { AddProductoBtn } from "./AddProductoBtn";
export const ProductoInfo = () => {
	const { producto } = useSelector((state) => state.producto);

	const estrellas = (numeroStars) => {
		var star = [];
		for (var i = 0; i < numeroStars; i++) {
			star.push({ id: i });
		}

		return star;
	};

	return (
		<div className="content align-self-center px-4 my-5">
			<h4 className="fw-bold">Ofertas de hoy</h4>
			<ul className="list-unstyled pt-3" style={{ height: "500px" }}>
				{producto.map(
					(p) =>
						p.oferta === true && (
							<li className="d-flex mb-4" key={p.id}>
								<div className="w-25 align-self-center">
									<img {...p.imagen} alt="imageProducto" />
								</div>
								<div className="ms-3">
									<p className="lead">
										{p.titulo}
										<span className="text-primary">.</span>
									</p>
									<p>
										<span className="text-primary fw-bold">
											$ {formatDecimal(p.precio)}
										</span>
										<span> {p.descripcion}</span>
									</p>

									{p.envio && (
										<p>
											<i className="fas fa-shipping-fast"></i>{" "}
											Envio totalmente gratis.
										</p>
									)}
									{estrellas(p.levelStars).map((es) => (
										<i
											className="fas fa-star"
											key={es.id}
										></i>
									))}

									<div className="align-self-center mt-3">
										<AddProductoBtn {...p}/>
									</div>
								</div>
							</li>
						)
				)}
			</ul>
		</div>
	);
};
