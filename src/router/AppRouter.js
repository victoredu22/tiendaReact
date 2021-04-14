import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { NavBar } from '../components/index/NavBar';
import { PieScreen } from '../components/index/PieScreen';
import 'animate.css'

import { LayoutScreen } from '../components/layout/LayoutScreen';
import { loadProducto } from '../actions/producto';
import { useDispatch } from 'react-redux';


export const AppRouter = () => {
  const dispatch = useDispatch();

  
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
      precio:'159990',
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
      precio:'159990',
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
      precio:'159990',
      oferta: false,
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
      precio:'159990',
      oferta: true,
      envio:true,
      levelStars: 5,
      stock:0,
      fechaPublicacion:'2021-04-01'
    },
  ]
  dispatch(loadProducto(contenido));


  return (
    <Router>
       <NavBar />
      
        <div>
          <Switch>
            <Route exact path="/" component={LayoutScreen} />
            <Route exact path="/compras" component={LayoutScreen} />
            <Redirect to="/"/> 
          </Switch>
        </div>

        <PieScreen />
    </Router>
  )
}
