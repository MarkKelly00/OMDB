import React from "react";
import MovieContext from "../utils/movieContext";
import {useMovieContext} from "../utils/movieContext.js"

function MovieDetail({ disabledBTN }) {
  const {handleInputChange} = useMovieContext();

  return (
    <MovieContext.Consumer >
      {({result: {Title, Poster, Director, Genre, Released}}) => (
        <div className="text-center">
          <img alt={Title} className="img-fluid" src={Poster} style={{ margin: "0 auto" }} />
            <h3>Director: {Director}</h3>
            <h3>Genre: {Genre}</h3>
            <h3>Released: {Released}</h3>
              <button className="btn btn-success" disabled={disabledBTN(Title)} onClick={handleInputChange} name="nominated" value={Title}>Nominate</button>
        </div>
      )}
    </MovieContext.Consumer>
  );
}


export default MovieDetail;
