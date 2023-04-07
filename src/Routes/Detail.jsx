import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [onlyDentists, setDentists] = useState({})
  const paramsForDentists = useParams()

  const getOnlyDentists =async() =>{

    const data = await fetch('https://jsonplaceholder.typicode.com/users' + paramsForDentists.id)
    .then((response) => {
      console.log("Aquí está la respuesta:", response)
      return response.json()
    })
    setDentists(data)

  }
  useEffect(() => {
    getOnlyDentists()
  }, [])

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <p>{onlyDentists.name}</p>
      <p>{onlyDentists.email}</p>
      <p>{onlyDentists.phone}</p>
      <p>{onlyDentists.website}</p>
    </>
  )
}

export default Detail