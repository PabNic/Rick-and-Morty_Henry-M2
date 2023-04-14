import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import style from "./Detail.module.css";

const Detail = () => {
  const URL = "https://be-a-rym.up.railway.app/api/character";
  const API_KEY = "0cb1e01cf881.cf1494678e221382aacf";

  const { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`${URL}/${id}?key=${API_KEY}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.cont}>
      <div className={style.cardy}>
        <div className={style.content}>
          <h1>{character?.name}</h1>
          <h2>{character?.status}</h2>
          <h2>{character?.species}</h2>
          <h2>{character?.gender}</h2>
          <h2>{character?.origin?.name}</h2>
        </div>

        <div>
          <img
            className={style.imagen}
            src={character?.image}
            alt={character?.name}
          />
        </div>
      </div>
    </div>
  );
};
export default Detail;
