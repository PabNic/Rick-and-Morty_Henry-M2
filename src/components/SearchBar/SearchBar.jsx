import { useState } from "react";
import "./SearchBar.css"




export default function SearchBar({onSearch}) {
   const [id, setId] = useState('')

   const handleChange = (event) => {
      setId(event.target.value)
   }

   const handleKeyDown = (event) => {
      if (event.keyCode === 13) {
         onSearch(id);
         setId('');
         event.preventDefault();
      }
   }

   return (
      <div>
         <input className="buscador" type='search' onChange={handleChange} onKeyDown={handleKeyDown} value={id} />
         <button className="button" onClick={() => {onSearch(id); setId('')}}>Agregar</button>
         
      </div>
   );
}
