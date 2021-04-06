import React from "react";

export const ProductoInfo = () => {
	const product = [
		{
			id: 0,
			img: {
				id: 0,
				src: "images/image-2.png",
				className: "img-fluid",
				alt: "imagen-celular",
			},
			title: "Apple",
			content: "iPhone 12 128GB Black",
			spanData: {
				price: "$ 159.990",
				info: "oferta",
			},
			send: true,
			levelStars: 5,
		},
	];

	const estrellas = (numeroStars) => {
		var star = [];
		for (var i = 0; i < numeroStars; i++) {
			star.push({ id: i });
		}

		return star;
	};

	return (
		<div className="content  align-self-center px-4 my-5">
			<h4 className="fw-bold">Ofertas de hoy</h4>
			<ul className="list-unstyled pt-3" style={{ height: "500px" }}>
				{product.map((p) => (
					<li className="d-flex mb-4" key={p.id}>
						<div className="w-25 align-self-center">
							<img {...p.img} alt="imageProducto" />
						</div>
						<div className="ms-3">
							<p className="lead">
								{p.title}
								<span className="text-primary">.</span>
							</p>
							<p>
								<span className="text-primary fw-bold">
									{p.spanData.price}
								</span>
								<span> {p.spanData.info}</span>
							</p>

							{p.send && (
								<p>
									<i className="fas fa-shipping-fast"></i>{" "}
									Envio totalmente gratis.
								</p>
							)}
							{estrellas(3).map((es) => (
								<i className="fas fa-star" key={es.id}></i>
							))}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};
