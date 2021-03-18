import React, { useState } from "react";
import MovieContext from "../utils/movieContext";

function MovieDetail(nominated) {
  console.log('try props ', nominated);
  const [title, setTitle] = useState(nominated);
  console.log('the state is now ', title);

  const handleClick = (e) => {
    e.preventDefault();
    setTitle({ nominated })
  }

  return (
    <MovieContext.Consumer >
      {({result: {Title, Poster, Director, Genre, Released}}) => (
        <div className="text-center">
          <img alt={Title} className="img-fluid" src={Poster} style={{ margin: "0 auto" }} />
          <h3>Director(s): {Director}</h3>
          <h3>Genre: {Genre}</h3>
          <h3>Released: {Released}</h3>
          <button className="btn btn-success" onClick={handleClick}>Nominate</button>
        </div>
      )}
    </MovieContext.Consumer>
  );
}

export default MovieDetail;
