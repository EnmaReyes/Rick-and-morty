import { useSelector } from "react-redux";
import Card from "../Card/Card.jsx";

const Favorites = () => {
  const Favorites = useSelector((state) => state.myFavorites);
  return (
    <>
      {Favorites.map(({ id, name, species, gender, image }) => {
        return (
          <Card
            key={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            id={id}
          />
        );
      })}
    </>
  );
};

export default Favorites;
