import React from "react";

export const MarcasEntries = () => {
  const marcas =[
    {
      id:0,
      titulo:'Apple',
      cantidad:6
    },
    {
      id:1,
      titulo:'Samsung',
      cantidad:4
    },
    {
      id:2,
      titulo:'huawei',
      cantidad:4
    }]


	return (
    <>
    {
      marcas.map(m=>(
        <div className="row" key={m.id}>
        <div className="col float-left">{m.titulo}</div>
        <div className="col loat-right">
          <span className="spanStock">({m.cantidad})</span>
        </div>
      </div>
      ))
    }
    </>
		
	);
};
