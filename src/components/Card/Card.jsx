import { Link } from "react-router-dom";
import "./Card.css"

export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   
   return (
      <div className="carta">
         <button onClick={() => onClose(id)}>X</button>

         <Link to={`/detail/${id}`}>
            <h1>{name}</h1>
         </Link>
         
         <h2>{species}</h2>
         <h2>{status}</h2>
         {/* <h2>{gender}</h2>
         <h2>{origin}</h2> */}
        
         <img src={image} alt='Imagen' />
      </div>
   );
}
