import React from 'react'

export const PieScreen = () => {
  return (
    <section className="d-flex pt-5 pb-0 h-100" >
    <div className="container align-self-center">
{/*       <div className="bg-primary text-center text-light p-5 rounded w-75 mx-auto mb-5">
        <h2 className="display-4 fw-bold">Crea tu cuenta hoy</h2>
        <p className="lead">Tu envio es mas seguro y rapido con nosotros</p>
      </div> */}
      <div className="row mb-3 text-center mt-5">
        <div className="col-lg-3 col-sm-6 my-4">
          <h5 className="fw-bold mb-3">Productos</h5>
          <ul className="list-unstyled">
            <li className="mb-3"><a href="#/" className="text-dark text-decoration-none">Tarjetas de credito</a></li>
            <li className="mb-3"><a href="#/" className="text-dark text-decoration-none">Tarjetas de débito</a></li>
            <li ><a href="#/"className="text-dark text-decoration-none">credito hipotecario </a></li>
          </ul>
        </div>
        <div className="col-lg-3 col-sm-6 my-4">
          <h5 className="fw-bold mb-3">Productos</h5>
          <ul className="list-unstyled">
            <li className="mb-3"><a href="#/" className="text-dark text-decoration-none">Tarjetas de credito</a></li>
            <li className="mb-3"><a href="#/" className="text-dark text-decoration-none">Tarjetas de débito</a></li>
            <li ><a href="#/" className="text-dark text-decoration-none">credito hipotecario </a></li>
          </ul>
        </div>
        <div className="col-lg-3 col-sm-6 my-4">
          <h5 className="fw-bold mb-3">Productos</h5>
          <ul className="list-unstyled">
            <li className="mb-3"><a href="#/" className="text-dark text-decoration-none">Tarjetas de credito</a></li>
            <li className="mb-3"><a href="#/" className="text-dark text-decoration-none">Tarjetas de débito</a></li>
            <li ><a href="#/" className="text-dark text-decoration-none">credito hipotecario </a></li>
          </ul>
        </div>
        <div className="col-lg-3 col-sm-6 my-4">
          <h5 className="fw-bold mb-3">Banca digital</h5>
          <ul className="list-unstyled">
            <li className="mb-3">Avenida Paseo de la reforma 296</li>
            <li >
              <ul className="list-inline">
                <li className="list-inline-item me-3"><a href="#/" className="lead text-dark"><i className="fab fa-facebook"></i></a></li>
                <li className="list-inline-item me-3"><a href="#/" className="lead text-dark"><i className="fab fa-instagram"></i></a></li>
                <li className="list-inline-item"><a href="#/" className="lead text-dark"><i className="fab fa-linkedin"></i></a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-top py-4">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <small>2021. Banco digital. Todos los derechos reservados</small>
          </div>
          <div className="col-lg-6 col-md-12">
            <ul className="list-inline text-lg-end">
              <li className="list-inline-item">
                <a href="#/" className="text-dark text-decoration-none"><small>Termino y condiciones</small></a>
              </li>
              <li className="list-inline-item">
                <a href="#/" className="text-dark text-decoration-none"><small>Aviso de privacidad</small> </a>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
