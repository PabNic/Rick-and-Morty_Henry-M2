import SearchBar from "../SearchBar/SearchBar"
import { NavLink } from "react-router-dom"
import "./Nav.css"
import generarNumeroAleatorio from "../Random"






const Nav = ({onSearch}) => {
    return (
     
        <nav className="navbar">
            <SearchBar onSearch={onSearch}/>

            <button className="boton" onClick={() =>{onSearch(generarNumeroAleatorio())}}>Random</button>

            <button className="boton">
            <NavLink to="/home">Home</NavLink>
            </button>
            
            <button className="boton">
            <NavLink to="/about">About</NavLink>
            </button>


         
        </nav>

   
    )
}

export default Nav