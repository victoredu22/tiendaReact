import React from 'react'
import { ContenidoScreen } from '../index/ContenidoScreen'
import { DestacadoScreen } from '../index/DestacadoScreen'
import { ExtraContent } from '../index/ExtraContent'
import { NavBar } from '../index/NavBar'
import { PieScreen } from '../index/PieScreen'


export const LayoutScreen = () => {
  return (
    <>
      <NavBar/>
      <DestacadoScreen />
      <ContenidoScreen />
      <ExtraContent />
      <PieScreen />
    </>
  )
}
