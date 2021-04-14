import React from 'react'
import { ProductoInfo } from '../productos/ProductoInfo'
import { ProductoSlidebar } from '../productos/ProductoSlidebar'

export const DestacadoScreen = () => {

  
  return (
  
    <section className="d-flex animate__animated animate__fadeIn">
      <div className="container align-self-center divDestacado">
        <div className="row">
          <div className="col-lg-6">
              <ProductoSlidebar />
          </div>
          <div className="col-lg-6">
              <ProductoInfo />
          </div>
        </div>
      </div>
    </section>
  )
}
