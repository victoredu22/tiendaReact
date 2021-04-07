import React from 'react'
import { useSelector } from 'react-redux';
import { MarcasEntries } from '../marcas/MarcasEntries';
import { ProductoContenido } from '../productos/ProductoContenido'

export const ContenidoScreen = () => {

  const {producto} = useSelector((state) => state.producto);

  const stock = producto.filter(p=>p.stock > 0).length;
  const sinStock = producto.filter(p=>p.stock === 0).length;


  return (
    <section className="d-flex pt-5 pb-0 h-100">
    <div className="container align-self-center">
      <div className="row">
        <div className="mx-auto">
          <h4 className="fw-bold">Smartphones  </h4>
          
          <hr />
        </div>
        <div className="col-lg-2">
          <div className="row">
          <div className="col-12">
            <h4 className="lead fw-bold">Marcas</h4>
            <MarcasEntries />
          </div>
          <div className="col-12 py-4">
            <h4 className="lead fw-bold">Disponibilidad</h4>

            <div className="row">
              <div className="col float-left">Stock</div>
              <div className="col loat-right"><span className="spanStock" >({stock})</span></div>
            </div>
            <div className="row">
              <div className="col float-left">Sin Stock</div>
              <div className="col loat-right"><span className="spanStock" >({sinStock})</span></div>
            </div>
            <div className="row">
              <div className="col float-left">Proximo</div>
              <div className="col loat-right"><span className="spanStock">(7)</span></div>
            </div>
          </div>
          </div>
        </div>
        <div className="col-lg-10">
          <div className="container align-self-center">
            <div className="row justify-content-md-center">
              {
                (producto) ?
                <ProductoContenido data={producto}/>
                :
                <></> 
              }
              </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
