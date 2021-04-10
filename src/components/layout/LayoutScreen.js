import React  from 'react'
import { useDispatch } from 'react-redux'
import moment from 'moment'
import { useLocation } from "react-router-dom";
import 'moment/locale/es';



import { loadProducto } from '../../actions/producto'
import { ContenidoScreen } from '../index/ContenidoScreen'
import { DestacadoScreen } from '../index/DestacadoScreen'
import { ExtraContent } from '../index/ExtraContent'
import { CompraScreen } from '../carrito/CompraScreen';



moment.locale('es');


export const LayoutScreen = () => {
  const dispatch = useDispatch();

  
  const location = useLocation();
  const {pathname} = location;

  localStorage.setItem('saludo','hola')


  /* const x = moment().format("DD-MM-YYYY");   
  var m = moment(x).toISOString();  */

  const contenido = [
    {
      id:0,
      activo:false,
      imagen:{
        id:0,
        src:'images/iphone1.jpg',
        className:"img-fluid",
        alt:"categoria-celulares"
      },
      categoria:0,
      titulo:'Apple',
      descripcion:'iPhone 12 128GB Black',
      precio:'$ 159.990',
      oferta: true,
      envio:true,
      levelStars: 5,
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
      categoria:1,
      titulo:'Apple',
      descripcion:'iPhone 12 128GB Black',
      precio:'$ 159.990',
      oferta: true,
      envio:false,
      levelStars: 5,
      stock:3,
      fechaPublicacion:'2021-04-01'
    },
    {
      id:2,
      activo:false,
      imagen:{
        id:0,
        src:'images/iphone2.jpg',
        className:"img-fluid",
        alt:"categoria-celulares"
      },
      categoria:2,
      titulo:'Apple',
      descripcion:'iPhone 12 128GB Blackxxxx',
      precio:'$ 159.990',
      oferta: true,
      envio:false,
      levelStars: 5,
      stock:2,
      fechaPublicacion:'2021-05-06'
    },
    {
      id:3,
      activo:false,
      imagen:{
        id:0,
        src:'images/iphone1.jpg',
        className:"img-fluid",
        alt:"categoria-celulares"
      },
      titulo:'Apple',
      descripcion:'iPhone 12 128GB Black',
      precio:'$ 159.990',
      oferta: true,
      envio:true,
      levelStars: 5,
      stock:0,
      fechaPublicacion:'2021-04-01'
    },
  ]
  dispatch(loadProducto(contenido));


  return (
    <>
      {
        (pathname === '/')
         &&
        <>
        <DestacadoScreen />
        <ContenidoScreen />
        <ExtraContent />
        </>
      },
      {
         (pathname === '/compras')
         &&
         <CompraScreen />
      }
      
    </>
  )
}
