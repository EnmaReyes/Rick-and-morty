import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/actions";
import { useState } from "react";
import React from "react";



function Card({id, name, species, gender, image, onClose, addFavorite, removeFavorite }) {

   const [isFav, setisFav]= useState(false);

   // const addFavorite =(character)=>{
   //    axios.post("http://localhost:3001/rickandmorty/fav", character)
   //    .then((res)=>console.log("ok"));
   // }
   
      const handleFavorite = ()=>{
         if (isFav) {
               setisFav(false);
               removeFavorite(id);           
         }else{
            setisFav(true);
            addFavorite({id, name, species, gender, image, onClose, addFavorite, removeFavorite })
         }
      }
   return (
 <div className={style.container}>        
 <button onClick={()=> onClose(id)} className={style.closeButton}>X</button>

 { isFav ? (
         <button onClick={handleFavorite} className={style.favboton}>❤️</button>
      ) : (
         <button onClick={handleFavorite}className={style.favboton}>🤍 </button>
      )
   }
         <p className={style.titulo}>{name}</p>
         <Link to={`/detail/${id}`}>
         <img className={style.img} src={image} alt="" /> 
         </Link>
         <h2 className={style.datos}>Species: {species}</h2>
         <h2 className={style.datos}>Gender: {gender}</h2>
         
      </div>
   );
}

const mapDispatchToProps =(dispatch)=>{
   return {
      addFavorite: (character)=>{dispatch(addFavorite(character))},
      removeFavorite: (id)=>{dispatch(removeFavorite(id))
      },
   };
};
const mapStateToProps =(state)=>{
   return{
      myFavorites: state.myFavorites,
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);