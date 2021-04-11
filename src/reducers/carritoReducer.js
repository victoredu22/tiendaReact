import { types } from "../types/types";

const initialState = {
	carrito: [],
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
      return{
        ...state,
        carrito: [...state.carrito, action.payload]
      }
		case types.loadItemsStorage:
			return{
				...state,
				carrito:[...action.payload]
			}
		default:
			return state;
	}
};
