import React from 'react'
import { useDispatch } from 'react-redux'
import { loadProducto } from '../../actions/producto'
import { ContenidoScreen } from '../index/ContenidoScreen'
import { DestacadoScreen } from '../index/DestacadoScreen'
import { ExtraContent } from '../index/ExtraContent'
import { NavBar } from '../index/NavBar'
import { PieScreen } from '../index/PieScreen'


export const LayoutScreen = () => {
  const dispatch = useDispatch();


  const contenido = [
    {
      id:0,
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
      stock:6
    },
    {
      id:1,
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
      stock:3
    },
    {
      id:2,
      imagen:{
        id:0,
        src:'images/iphone2.jpg',
        className:"img-fluid",
        alt:"categoria-celulares"
      },
      categoria:2,
      titulo:'Apple',
      descripcion:'iPhone 12 128GB Black',
      precio:'$ 159.990',
      oferta: true,
      envio:false,
      levelStars: 5,
      stock:2
    },
    {
      id:3,
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
      stock:7
    },
  ]
  dispatch(loadProducto(contenido));

  

  return (
    <>
      <NavBar/>
      <DestacadoScreen />
      <ContenidoScreen />
      <ExtraContent />
      <PieScreen />
    </>
  )
}
