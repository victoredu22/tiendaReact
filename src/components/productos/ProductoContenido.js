import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { addProducto } from "../../actions/carrito";


export const ProductoContenido = (contenido) => {
	const { data } = contenido;
	const { carrito } = useSelector(state => state.carrito);


	const dispatch = useDispatch();
	const ingresoItem = (e,producto)=>{
		e.preventDefault();
		
		const data = localStorage.getItem('carrito');

		const x = (data == null)
		 						? [{...producto}]
								: [ ...JSON.parse(data), producto ]
 


		localStorage.setItem('carrito', JSON.stringify(x)); 
		//dispatch(addProducto(producto));

		//const y = localStorage.getItem('carrito');

		console.log( JSON.parse(localStorage.getItem('carrito')));


	}

	return (
		<>
			{data.map((m) => (
				(m.activo) &&
				 
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
								<i className="fas fa-shipping-fast"></i> Envio gratis.
							</p>
						)}
						<div className="align-self-center">
							<button type="button" className="btn btn-outline-secondary" onClick={(e)=>ingresoItem(e,m)}>
								<i className="fas fa-shopping-bag text-primary" aria-hidden="true"></i> Agregar al carro
							</button>
						</div>
						
					</div>
				</div>
			))}

		</>
	);
};
