import { useState } from "react";

const Beers = (props) => {
  const [tile, setTile] = useState(false);
  const beers = props.beers;

  const click = () => {
    setTile(!tile);
  };

  return (
    <div className="images">
      {beers.map((beer) => (
        <div className="beer" key={beer.id} onClick={click}>
          {tile ? (
            <p>{beer.description}</p>
          ) : (
            <img src={beer.image_url} alt="" />
          )}
          <p>{beer.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Beers;
