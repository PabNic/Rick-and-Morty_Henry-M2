import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./Favorites.module.css";
import { orderCards, filterCards } from "../../redux/actions";
import { useState } from "react";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.myFavorites);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };
  const [aux, setAux] = useState(false);

  return (
    <div>
      <div className={style.favContainer}>
        <label className={style.label} htmlFor="orden">
          Orden:
        </label>
        <select className={style.select} id="orden" onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <label className={style.label} htmlFor="genero">
          Género:
        </label>
        <select className={style.select} id="genero" onChange={handleFilter}>
          <option value="Male">Masculino</option>
          <option value="Female">Femenino</option>
          <option value="Genderless">Sin genero</option>
          <option value="unknown">Desconocido</option>
          <option value="allCharacters">Todos los favoritos</option>
        </select>
      </div>

      <div className={style.favs}>
        {favorites.map(
          ({ id, name, status, species, gender, origin, image, onClose }) => {
            return (
              <Card
                id={id}
                key={id}
                name={name}
                species={species}
                gender={gender}
                origin={origin.name}
                image={image}
                status={status}
                onClose={onClose}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default Favorites;

// import { connect } from "react-redux";
// import Card from "../Card/Card";

// const Favorites = ({ myFavorites }) => {
//   return (
//     <div>
//       {myFavorites?.map(
//         ({ id, name, status, species, gender, origin, image, onClose }) => {
//           return (
//             <Card
//               key={id}
//               id={id}
//               name={name}
//               status={status}
//               species={species}
//               gender={gender}
//               origin={origin.name}
//               image={image}
//               onClose={onClose}
//             />
//           );
//         }
//       )}
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     myFavorites: state.myFavorites,
//   };
// };

// export default connect(mapStateToProps, null)(Favorites);
