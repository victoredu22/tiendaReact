import React  from 'react'
import moment from 'moment'
import { useLocation } from "react-router-dom";
import 'moment/locale/es';



import { ContenidoScreen } from '../index/ContenidoScreen'
import { DestacadoScreen } from '../index/DestacadoScreen'
import { ExtraContent } from '../index/ExtraContent'
import { CompraScreen } from '../carrito/CompraScreen';
import toastr from "toastr";



moment.locale('es');


export const LayoutScreen = ({history}) => {
  toastr.options = {
		"closeButton": false,
		"debug": false,
		"newestOnTop": false,
		"progressBar": false,
		"positionClass": "toast-top-full-width",
		"preventDuplicates": false,
		"onclick": null,
		"showDuration": "300",
		"hideDuration": "1000",
		"timeOut": "5000",
		"extendedTimeOut": "1000",
		"showEasing": "swing",
		"hideEasing": "linear",
		"showMethod": "fadeIn",
		"hideMethod": "fadeOut"
	}
  
  const location = useLocation();
  const {pathname} = location;


  return (
    <>
      {
        (pathname === '/')
         &&
        <>
        <DestacadoScreen />
        <ContenidoScreen {...history}/>
        <ExtraContent />
        </>
      },
      {
         (pathname === '/compras')
         &&
         <CompraScreen />
      }
      
    </>
  )
}
