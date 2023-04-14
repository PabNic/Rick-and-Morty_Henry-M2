import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";

function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({
        id,
        name,
        status,
        species,
        gender,
        origin,
        image,
        onClose,
        addFav,
        removeFav,
        myFavorites,
      });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, id]);

  return (
    <div className={style.container}>
      <div className={style.card}>
        <div>
          <div className={style.topCard}>
            <button className={style.favButton} onClick={handleFavorite}>
              {isFav ? "❤️" : "🤍"}{" "}
            </button>

            <button className={style.closeButton} onClick={() => onClose(id)}>
              X
            </button>
          </div>

          <h3 className={style.nombre}>{name}</h3>
          <h4 className={style.especie}>{species}</h4>
          <h4 className={style.estado}>{status}</h4>
          <img src={image} alt="Imagen" />
          <Link to={`/detail/${id}`}>
            <button className={style.detailButton}>Detail</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
