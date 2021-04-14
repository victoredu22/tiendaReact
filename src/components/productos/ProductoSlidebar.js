import React from "react";

export const ProductoSlidebar = () => {
	const buttoms = [
		{
			id: 0,
			type: "button",
			"data-bs-target": "#carouselExampleIndicators",
			"data-bs-slide-to": "0",
			className: "active",
			"aria-current": "true",
			"aria-label": "Slide 1",
		},
		{
			id: 1,
			type: "button",
			"data-bs-target": "#carouselExampleIndicators",
			"data-bs-slide-to": "1",
			"aria-label": "Slide 2",
		},
		{
			id: 2,
			type: "button",
			"data-bs-target": "#carouselExampleIndicators",
			"data-bs-slide-to": "2",
			"aria-label": "Slide 3",
		},
	];

	const divImg = [
		{
			id: 0,
			className: "carousel-item active",
			img: {
				src: "images/samsungPortada.jpg",
				className: "d-block w-100",
				alt: "imgCarrusel1",
			},
		},
		{
			id: 1,
			className: "carousel-item",
			img: {
				src: "images/iphonePortada.jpg",
				className: "d-block w-100",
				alt: "imgCarrusel2",
			},
		},
		{
			id: 2,
			className: "carousel-item",
			img: {
				src: "images/huaweiPortada.jpg",
				className: "d-block w-100",
				alt: "imgCarrusel3",
			},
		},
	];

	return (
		<div className="content mx-auto align-self-center px-4 my-5">
			<h4 className="fw-bold">
				Productos destacados<span className="text-primary">.</span>
			</h4>
			<p>Estos son los productos con mas pedidos!</p>
			<div
				id="carouselExampleIndicators"
				className="carousel slide"
				data-bs-ride="carousel"
			>
				<div className="carousel-indicators">
					{buttoms.map((b) => (
						<button {...b} key={b.id} />
					))}
				</div>

				<div className="carousel-inner">
					{divImg.map((dm) => (
						<div className={dm.className} key={dm.id}>
							<img {...dm.img} alt="imgDestacadas"/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
