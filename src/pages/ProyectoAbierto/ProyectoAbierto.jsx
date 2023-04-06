import React from 'react'
import './proyectoabierto.css'

const ProyectoAbierto = ({...proyecto}) => {
  return (
    <div><h1>{proyecto.titulo}</h1></div>
  )
}

export default ProyectoAbierto