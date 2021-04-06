import React from 'react'

export const ContenidoScreen = () => {
  return (
    <section className="container">
      <div className="container divCompra">
        <div className="row mp-5">
          <div className="col-lg-8 ">
            <div className="bg-grey p-3 rounded">
              <div className="row">
                <div className="col-lg-8 float-left">
                  
                  <div className="d-flex mb-2">
                    <div className="w-25 align-self-center">
                      <img src="images/image-2.png" style={{width:'80%'}} alt="img-contenido" />
                    </div>
                    <div className="ms-3">
                      <p className="lead">Apple<span className="text-primary">.</span></p> 
                      <p>iPhone 12 128GB Black</p>
                      <p><span className="text-primary fw-bold">$ 159.990</span><span> oferta</span></p>
                      <p><i className="fas fa-shipping-fast" aria-hidden="true"></i> Envio totalmente gratis.</p>
                      <p><i className="fas fa-star" aria-hidden="true"></i><i className="fas fa-star" aria-hidden="true"></i><i className="fas fa-star" aria-hidden="true"></i><i className="fas fa-star" aria-hidden="true"></i> (2 calificaciones)</p>
                    </div>
                  </div>

                </div>
                <div className="col-lg-4 align-self-center">
                  <div className="text-center">
                    <button type="button" className="btn btn-light"><i className="fas fa-minus"></i></button>
                    hola
                    <button type="button" className="btn btn-light"><i className="fas fa-plus"></i></button>
                  </div>
                </div>
              </div>

              
              <hr />
              <div className="d-flex mb-2">
                
                <div className="w-25 align-self-center">
                  <img src="images/image-2.png" style={{width:'80%'}}  alt="img-contenido" />
                </div>
                <div className="ms-3">
                  <p className="lead">Apple<span className="text-primary">.</span></p> 
                  <p>iPhone 12 128GB Black</p>
                  <p><span className="text-primary fw-bold">$ 159.990</span><span> oferta</span></p>
                  <p><i className="fas fa-shipping-fast" aria-hidden="true"></i> Envio totalmente gratis.</p>
                  <p><i className="fas fa-star" aria-hidden="true"></i><i className="fas fa-star" aria-hidden="true"></i><i className="fas fa-star" aria-hidden="true"></i><i className="fas fa-star" aria-hidden="true"></i> (2 calificaciones)</p>
                </div>
              </div>
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
