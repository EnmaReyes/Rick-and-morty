import {React, useState} from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "../Nav/Nav.module.css"


const Nav = (props) => {
  const [activo, setActivo] = useState(null);

  const changeColor =(butonId)=>{
    setActivo(butonId)
  }
    return (
      <div className={style.navegacion}>
        <SearchBar onSearch={props.onSearch} />

        <Link to ="/about" style={{ textDecoration: 'none' }}>
          <h3 className={activo === 1? style.about2 : style.about} onClick={()=>changeColor(1)}>About</h3>
        </Link>

        <Link to ="/home" style={{ textDecoration: 'none' }}>
          <h3 className={activo === 2? style.home2 : style.home} onClick={()=>changeColor(2)}>Home</h3>
        </Link>

        <Link to = "/favorites" style={{ textDecoration: 'none' }}>
          <h3 className={activo === 3? style.fav2 : style.fav} onClick={()=>changeColor(3)}>Favorites</h3>
        </Link>
        
      </div>
    );
  }

export default Nav;