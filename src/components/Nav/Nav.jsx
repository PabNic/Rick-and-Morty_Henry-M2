import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.css";
import generarNumeroAleatorio from "../Random";

const Nav = ({ onSearch, logOut }) => {
  return (
    <nav className={style.navbar}>

      <h1 className={style.head}>RICK AND MORTY</h1>

      <SearchBar onSearch={onSearch} />

      <button
        className={style.boton}
        onClick={() => {
          onSearch(generarNumeroAleatorio());
        }}
      >
        Random
      </button>

      <button className={style.boton}>
        <NavLink className={style.miLink} to="/home">
          Home
        </NavLink>
      </button>

      <button className={style.boton}>
        <NavLink className={style.miLink} to="/about">
          About
        </NavLink>
      </button>

      <button className={style.boton}>
        <NavLink className={style.miLink} to="/favorites">
          Favorites
        </NavLink>
      </button>

      <button className={style.boton}>
        <NavLink
          className={style.miLink}
          to="/"
          onClick={logOut}
        >
          Log out
        </NavLink>
      </button>
    </nav>
  );
};

export default Nav;
