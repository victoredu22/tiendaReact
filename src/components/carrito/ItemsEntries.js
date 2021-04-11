import React from "react";
import { ContadorProductos } from "../../hook/ContadorProductos";
import { useForm } from "../../hook/useForm";

export const ItemsEntries = (data) => {
	const { data: itemsCarroCompra } = data;
	ContadorProductos(itemsCarroCompra,'resta');
	

	const handleOperacion = (e,operacion)=>{
		e.preventDefault();

		//const [cantidad, resta] = ContadorProductos(itemsCarroCompra,operacion);
		
			



	}
	return (
		<>
			{data.validadorItem && <hr></hr>}
			{
				<div className="row">
					<div className="col-lg-8 float-left">
						<div className="d-flex mb-2">
							<div className="w-25 align-self-center">
								<img
									src={itemsCarroCompra.imagen.src}
									style={{ width: "80%" }}
									alt="img-contenido"
								/>
							</div>
							<div className="ms-3">
								<p className="lead">
									{itemsCarroCompra.titulo}
									<span className="text-primary">.</span>
								</p>
								<p>{itemsCarroCompra.description}</p>
								<p>
									<span className="text-primary fw-bold">
										{itemsCarroCompra.precio}
									</span>
									{itemsCarroCompra.oferta && (
										<span> oferta</span>
									)}
								</p>
								<p>
									{itemsCarroCompra && (
										<>
											<i
												className="fas fa-shipping-fast"
												aria-hidden="true"
											></i>
											Envio totalmente gratis.
										</>
									)}
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 align-self-center">
						<div className="text-center">
							<button type="button" className="btn btn-light" onClick={(e)=> handleOperacion(e,'resta')}>
								<i className="fas fa-minus"></i>
							</button>
							{itemsCarroCompra.enCarroCompras}
							<button type="button" className="btn btn-light" onClick={(e)=> handleOperacion(e,'suma')}>
								<i className="fas fa-plus"></i>
							</button>
						</div>
					</div>
				</div>
			}
		</>
	);
};
