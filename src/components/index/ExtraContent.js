import React from 'react'

export const ExtraContent = () => {
  return (
    <section className="d-flex pt-5 pb-0 h-100">
    <div className="container align-self-center">
      <div className="row">
        <div className="mx-auto">
          <h4 className="fw-bold">Smartwatch  </h4>
          <hr/>
        </div>
        <div className="col-lg-6">
          <div className="content mx-auto px-4 my-5">
          <figure className="snip1467">
            <img src="images/smartwatch-02.jpg" alt="smart"/>
            <figcaption>
              <h3>Apple Watch Series</h3>
              <p>El Apple Watch Series 6 viene a revolucionarlo todo.  Se más sano, más activo y mejor conectado. </p>
            </figcaption>
          </figure>

          </div>
        </div>
        <div className="col-lg-6">
          <div className="content mx-auto px-4 my-5">
          <figure className="snip1467">
            <img src="images/smartwatch-03.jpg"  alt="smart"/>
            <figcaption>
              <h3>Smartwatch Samsung Galaxy</h3>
              <p>El diseño del Galaxy Watch Active es sobrio y liviano para que te muevas de forma cómoda y rápida.</p>
            </figcaption>
          </figure>

            
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
