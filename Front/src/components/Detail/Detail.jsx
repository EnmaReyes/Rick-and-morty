import useCharacter from '../hooks/useCharacter';

export const Detail = () => {
    const character = useCharacter();

  return (
    <div>
        {character.name? ( 
        <>
        <h2>{character.name}</h2>
        <p>{character.status}</p>
        <p>{character.species}</p>
        <p>{character.gender}</p>
        <p>{character.origin?.name}</p>
        <img src={character.imagen} alt="img" />
        </>
      ): (
        <h3>Cargando...</h3>
         )}
       
    </div>
  )
}


export default Detail;