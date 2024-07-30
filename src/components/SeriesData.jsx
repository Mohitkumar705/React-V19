const SeriesData = ({data}) => {
   
    // eslint-disable-next-line no-unused-vars
    const { id, img_url, name, rating, description, genre, cast, watch_url} = data;
  return (
    <>
      <li>
        <div>
          <img src={img_url} alt={name} width="20% " height={"20%"} />
        </div>
        <h2>Name: {name}</h2>
        <h3>Rating: {rating}</h3>
        <p>Summary: {description}</p>
        <p>Genre: {genre}</p>
        <p>Cast: {cast}</p>
        <a href={watch_url} target="_blank">
          <button>watch now:</button>
        </a>
      </li>
    </>
  );
};
export default SeriesData;
