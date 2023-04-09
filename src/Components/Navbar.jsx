import { useContextGlobal } from './utils/global.context'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { Routes } from "react-router-dom";
import { routes } from '../routes'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {themeState, setDispatch} = useContextGlobal()
  const [themeColor, setThemeColor] = useState(true)
  const [vista, setVista] = useState('Switch-Light')


  const handleClick = ()=>{
    setThemeColor(!themeColor)
    setDispatch({type: vista})
  }

  useEffect(()=>{
    if(themeColor){
      setVista('Switch-Dark')
    }else{
      setVista('Switch-Light')
    }
    //themeDispatch({type:vista})
  },[themeColor])



  return (
    <nav>
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <Link to={routes.Home}><h3 style={{ color: themeState.color}}>Inicio </h3></Link>
        <Link to={routes.Contact}><h3 style={{ color: themeState.color}}>Contacto </h3></Link>
        <Link to={routes.Favs}><h3 style={{ color: themeState.color}}>Favoritos </h3></Link>
        <button className='button' onClick={handleClick}>{themeState.icon} </button>
      
    </nav>
  )
}


export default Navbar