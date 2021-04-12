import React from "react";
import { formatDecimal } from "../../helper/precioString";

export const CompraDetalle = (costos) => {
	const { data } = costos;

	return (
		<>
			{data ? (
				<div className="content align-self-center px-4">
					<h4 className="fw-bold">Resumen de pedidos</h4>
					<hr />
					<div className="row">
						<div className="col float-left">Subtotal: </div>
						<div className="col float-right">
							${formatDecimal(data.subTotal)}
						</div>
					</div>
					<hr />
					<div className="row">
						<div className="col float-left">Envio: </div>
						<div className="col float-right">Gratis</div>
					</div>
					<hr />
					<div className="row">
						<div className="col float-left">
							<p className="lead fw-bold">Total</p>
						</div>
						<div className="col float-right">
							<p>
								<span className="text-primary fw-bold">
                ${formatDecimal(data.subTotal)}
								</span>
							</p>
						</div>
					</div>
					<div className="row">
						<a className="btn btn-primary" href="#/">
							Ir al pago
						</a>
					</div>
				</div>
			) : (
				<></>
			)}
		</>
	);
};
