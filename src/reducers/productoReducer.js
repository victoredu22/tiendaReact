import { types } from "../types/types";

const initialState = {
	producto: [],
};
export const producReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.loadProducto:
			return {
				...state,
				producto: action.payload,
			};
		case types.changeActive:
			return {
				...state,
				producto: state.producto.map((p) =>
					p.categoria === action.payload.id
						? {
								...p,
								activo: true,
						  }
						: {
								...p,
								activo: false,
						  }
				),
			};
		case types.activosProductos:
			return {
				...state,
				producto: state.producto.map((p) => ({ ...p, activo: true })),
			};
		case types.changeActivoStock:
			return {
				...state,
				producto:state.producto.map((p) =>
					p.stock > 0 ? { ...p, activo: true } : { ...p, activo: false }
				)
			}
		case types.changeActivoSinStock:
			return{
				...state,
				producto:state.producto.map((p) =>
					p.stock === 0 ? { ...p, activo: true } : { ...p, activo: false }
				)
			}
		case types.changeFechaProxima:
			return{
				...state,
				producto:state.producto.map((p) =>
					p.fechaPublicacion > action.payload
					?	{...p, activo:true}
					: {...p, activo:false}
				)
			}
		default:
			return state;
	}
};
