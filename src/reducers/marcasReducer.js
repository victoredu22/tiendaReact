import {types} from "../types/types";

const initialState = {
  marca: [
    {
			id: 0,
			titulo: "Apple",
			cantidad: 0,
		},
		{
			id: 1,
			titulo: "Samsung",
			cantidad: 0,
		},
		{
			id: 2,
			titulo: "huawei",
			cantidad: 0,
		},
  ]
}

export const marcasReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.changeMarca:
			return{
				...state,
				marca: state.marca.map(m=>(
					{
						...m,
						cantidad:action.payload.filter(p=>p.categoria === m.id).length
					}
				))
			}
    default:
      return state;
  }
}
