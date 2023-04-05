import SearchBar from "./SearchBar"
import { Link } from "react-router-dom"




const Nav = ({onSearch}) => {
    return (
     
        <nav>
            <SearchBar onSearch={onSearch}/>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
         
        </nav>

   
    )
}

export default Nav