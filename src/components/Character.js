// https://swapi.dev/search/
const Character = ({ character }) => {
  const { id, name } = character;
  return (
    <article className="Character">
      <a href={`https://swapi.dev/api/people/${id}`}>
        {name}
      </a>
    </article>
  );
};

export default Character;
