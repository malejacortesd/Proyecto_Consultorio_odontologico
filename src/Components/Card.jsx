import React from "react";
import { Link } from "react-router-dom";
import doctor from '../images2/doctor.jpg'


const Card = ({ name, username, id }) => {

  const addFav = (dentistsName, dentistsUsername, dentistsId)=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const currentFavorites = localStorage.getItem('favoritesDentists')
    let arrayFavoritesDentist = JSON.parse(currentFavorites)
  }

  return (
    <Link to={`detail/${id}`}>
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        
        <img src={doctor} alt={name} width='150px' />
        <h1>
          {name}
        </h1>
        <h2>
          {username}
        </h2>
        <h3>
          {id}
        </h3>
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
    </Link>
  );
};

export default Card;
