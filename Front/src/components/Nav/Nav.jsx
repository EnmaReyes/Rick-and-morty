import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "../Nav/Nav.module.css"


const Nav = (props) => {
    return (
      <div className={style.navegacion}>
        <SearchBar onSearch={props.onSearch} />
        <Link to ="/about" style={{ textDecoration: 'none' }}><h3 className={style.about}>About</h3></Link>
        <Link to ="/home" style={{ textDecoration: 'none' }}><h3 className={style.home}>Home</h3></Link>
        <Link to = "/favorites" style={{ textDecoration: 'none' }}><h3 className={style.fav}>Favorites</h3></Link>
      </div>
    );
  }

export default Nav;