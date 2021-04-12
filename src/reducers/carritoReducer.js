import { types } from "../types/types";

const initialState = {
	carrito: [],
	costos: "",
};

export const carritoReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.loadCarrito:
			return {
				...state,
				carrito: [{ ...action.payload, enCarroCompras: 1 }],
			};
		case types.changeStockCarrito:
			return {
				...state,
				carrito: state.carrito.map((item) =>
					item.id === action.payload.id
						? { ...action.payload }
						: { ...item }
				),
			};
		case types.addItemCarrito:
			return {
				...state,
				carrito: [...state.carrito, action.payload],
			};
		case types.loadItemsStorage:
			return {
				...state,
				carrito: [...action.payload],
			};
		case types.deleteItemCarrito:
			return {
				...state,
				carrito: state.carrito.map((item) =>
					item.id === action.payload.id
						? {...action.payload, activo:false}
						: {...item}
				),
			}; 
		case types.loadSubTotal:
			return {
				...state,
				costos: action.payload,
			};
		default:
			return state;
	}
};
