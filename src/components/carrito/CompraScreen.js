import React from 'react'
import { ItemsEntries } from './ItemsEntries'

export const CompraScreen = () => {

  const itemsLocal = JSON.parse(localStorage.getItem("carrito"));
  
  return (
    <section className="d-flex pb-0 h-100 animate__animated animate__fadeIn ">
      <div className="container divCompra">
        <div className="row mp-5">
          <div className="col-lg-8 ">
            <div className="bg-grey p-3 rounded">
              {
                itemsLocal.map((items,key)=> (
                  <ItemsEntries 
                    key={key}
                    data={items}
                    validadorItem= {(key >= 1) ? true : false}
                  /> 
                ))
              }
            </div>
            

            
            <div className="content align-self-center">
              <div className="text-center">
                <h4> <i className="fas fa-shopping-cart"></i> No tienes compras en tu carrito</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="content align-self-center px-4">
              <h4 className="fw-bold">Resumen de pedidos</h4>
              <hr/>
              <div className="row">
                <div className="col float-left">Subtotal: </div>
                <div className="col float-right">$26.455</div>
              </div>
              <hr/>
              <div className="row">
                <div className="col float-left">Envio: </div>
                <div className="col float-right">Gratis</div>
              </div>
              <hr/>
              <div className="row">
                <div className="col float-left">
                  <p className="lead fw-bold">Total</p>
                </div>
                  <div className="col float-right">
                    <p><span className="text-primary fw-bold">$ 159.990</span></p>
                  </div>
              </div>
              <div className="row">
                <a className="btn btn-primary" href="#/">Ir al pago</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
