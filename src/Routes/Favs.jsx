import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const [show, setShow] = useState(true)
  const [id, setId] = useState()

  const logout = () => {
    setId(id)
    setShow(!show)
  }

  let favs = JSON.parse(localStorage.getItem('favs'))
  useEffect(() => {
    let favs = JSON.parse(localStorage.getItem('favs'))
    let borr = favs.find(obj => obj.id == id)
    const idDelete = favs.indexOf(borr)
    favs.splice(idDelete, 1)
    localStorage.setItem('favs', JSON.stringify(favs))
  }, [show])


  return (
    <>
      <h1>Dentists Favs</h1>

      {/* este componente debe consumir los destacados del localStorage */}
      {/* Deberan renderizar una Card por cada uno de ellos */}
      <div className='card-grid'>
        {favs.map(fav => (
          <div className="card" key={fav.id}>
            <h3>{fav.name}</h3>
            <img src="./images/doctor.jpg" alt='Doctor' width={90} />
            <h3>{fav.username}</h3>
            <button onClick={logout}> ❌ </button>
          </div>
        )
        )}
      </div>


    </>
  );
};

export default Favs;
