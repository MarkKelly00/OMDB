import React from "react";
import MovieContext from "../utils/movieContext";

function MovieDetail() {
  return (
    <MovieContext.Consumer>
      {({result: {Title, Poster, Director, Genre, Released}}) => (
        <div className="text-center">
          <img alt={Title} className="img-fluid" src={Poster} style={{ margin: "0 auto" }} />
          <h3>Director(s): {Director}</h3>
          <h3>Genre: {Genre}</h3>
          <h3>Released: {Released}</h3>
          <button className="btn btn-success">Nominate</button>
        </div>
      )}
    </MovieContext.Consumer>
  );
}

export default MovieDetail;
