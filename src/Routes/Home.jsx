import { response } from 'msw';
import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [dentists, setDentists] = useState([])

  const getDentists =async() =>{
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      console.log("Aquí está la respuesta:", response)
      return response.json()
    })
    setDentists(data)

  }
  useEffect(() => {
    getDentists()
  }, [])

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentists.map ((dentists) => {
          return(<Card key= {dentists.id} name= {dentists.name} id= {dentists.id} username= {dentists.username}/>)
        })}
      </div>
    </main>
  )
}

export default Home