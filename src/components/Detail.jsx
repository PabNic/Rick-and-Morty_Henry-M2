import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"


const Detail = () => {

    const{id} = useParams()

    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <div>
            <h1>Personaje con ID: {id}</h1>
        </div>
    )
}
export default Detail