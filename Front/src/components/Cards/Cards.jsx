import Card from "../Card/Card";
import style from "./Cards.module.css";

function Cards({characters, onClose}) {
   
   return (
      <div className={style.cartas}>
         {characters.map(({id,name, species, gender, image}) =>{
            return(
               
               <Card
                  key={id}
                  name={name}
                  species={species}
                  gender={gender}
                  image={image}
                  id={id}
                  onClose={onClose}
               />
            )
         })}
      </div>
   );}

   export default Cards;

