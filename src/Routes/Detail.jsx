import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [onlyDentists, setOnlyDentists] = useState({})
  const params = useParams()

  const url = "https://jsonplaceholder.typicode.com/users/" + params.id
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setOnlyDentists(data))
  }, [])

  return (
    <div style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div className='card1'>
        <h3>{onlyDentists.name}</h3>
        <img src="../images/doctor.jpg" alt='Doctor' width={90} />
        <h3>Email: {onlyDentists.email}</h3>
        <h3>Telefono: {onlyDentists.phone}</h3>
        <h3>Website: {onlyDentists.website}</h3>
      </div>
    </div>
  )
}

export default Detail