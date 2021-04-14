import { types } from "../types/types";

const initialState = {
	producto: [
		{
      id:0,
      activo:false,
      imagen:{
        id:0,
        src:'images/iphone4.jpg',
        className:"img-fluid",
        alt:"categoria-celulares"
      },
      categoria:0,
      titulo:'Apple',
      descripcion:'iPhone 12 128GB Black',
      precio:'899990',
      oferta: true,
      envio:true,
      levelStars: 3,
      stock:6,
      fechaPublicacion:'2021-04-01'
    },
    {
      id:1,
      activo:false,
      imagen:{
        id:0,
        src:'images/iphone3.jpg',
        className:"img-fluid",
        alt:"categoria-celulares"
      },
      categoria:0,
      titulo:'Apple',
      descripcion:'Smartphone iPhone 12 Pro 128GB',
      precio:'1099990',
      oferta: true,
      envio:false,
      levelStars: 3,
      stock:3,
      fechaPublicacion:'2021-04-01'
    },
    {
      id:2,
      activo:false,
      imagen:{
        id:0,
        src:'images/samsung1.jpg',
        className:"img-fluid",
        alt:"categoria-celulares"
      },
      categoria:1,
      titulo:'Samsung',
      descripcion:'Galaxy S21 Ultra 128GB',
      precio:'1199990',
      oferta: false,
      envio:false,
      levelStars: 5,
      stock:0,
      fechaPublicacion:'2021-05-06'
    },
    {
      id:3,
      activo:false,
      imagen:{
        id:0,
        src:'images/huawei2.jpg',
        className:"img-fluid",
        alt:"categoria-celulares"
      },
      categoria:2,
      titulo:'Huawei',
      descripcion:'Mate 30 PRO 256GB',
      precio:'949990',
      oferta: true,
      envio:true,
      levelStars: 2,
      stock:4,
      fechaPublicacion:'2021-04-01'
    }
	],
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
				producto: state.producto.map((p) =>
					p.stock > 0
						? { ...p, activo: true }
						: { ...p, activo: false }
				),
			};
		case types.changeActivoSinStock:
			return {
				...state,
				producto: state.producto.map((p) =>
					p.stock === 0
						? { ...p, activo: true }
						: { ...p, activo: false }
				),
			};
		case types.changeFechaProxima:
			return {
				...state,
				producto: state.producto.map((p) =>
					p.fechaPublicacion > action.payload
						? { ...p, activo: true }
						: { ...p, activo: false }
				),
			};
		case types.searchProducto:
			return {
				...state,
				producto: state.producto.map((p) =>
					p.titulo.toLocaleLowerCase().includes(action.payload)
						? { ...p, activo: true }
						: { ...p, activo: false }
				),
			};
		default:
			return state;
	}
};
