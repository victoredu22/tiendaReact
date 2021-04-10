import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadCarrito } from '../../actions/carrito';


export const NavBar = () => {
  
  const dispatch = useDispatch();
  const {carrito} = useSelector((state)=>state.carrito);

  const x = localStorage.getItem('carrito');
  const [carroStorage, setCarroStorage] = useState(localStorage.getItem('carrito'))


  useEffect(() => {
    setCarroStorage(carrito)
  }, [carrito])





/*   useEffect(() => {
    
    if(carrito.length != 0){
				localStorage.setItem('carrito', JSON.stringify(carrito));
		}else{
			console.log('no');
		}
    //localStorage.setItem('carrito', JSON.stringify(carrito));
  
  }, [])
   */

  




  
  return (
    <div className="row g-0 h-100">
    <nav className="navbar navbar-expand-lg navbar-light bg-light position-fixed w-100" style={{zIndex: '100'}}>
      <div className="container">
        <a className="navbar-brand fw-bold" href={'/'} >Banca Digital<span className="text-primary">.</span></a>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars lead text-dark"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item d-flex">
            <span  className="searchNav" >
              <i className="fas fa-search"></i>
            </span>
            <input type="text" className="form-control searchProducto" placeholder="Buscar producto"  />
          </li>
          <li className="nav-item align-self-center d-flex">
            <a className="nav-link text-dark"  href={'/compras'} >
              <i className="fas fa-shopping-bag text-primary"></i> Mi carrito <span className="spanStock" >({carrito.length})</span></a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="!#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
              <i className="fas fa-user text-primary"></i> Inicia Sesion
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#/">Action</a></li>
              <li><a className="dropdown-item" href="#/">Another action</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#/">Something else here</a></li>
            </ul>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  </div>
  )
}
