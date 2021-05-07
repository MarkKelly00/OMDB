import React, { useState } from "react";
import MovieContext from "../utils/movieContext";
import {useMovieContext} from "../utils/movieContext.js"

function MovieDetail(nominated) {
  console.log('try props ', nominated);
  const [title, setTitle] = useState(nominated);
  console.log('the state is now ', title);
  const {handleInputChange} = useMovieContext();

// const disabledBTN = (nominated) => {
//   if (nominated.includes(title)) {
//     return true;
//   }
//   return false;
// }



  return (
    <MovieContext.Consumer >
      {({result: {Title, Poster, Director, Genre, Released}}) => (
        <div className="text-center">
          <img alt={Title} className="img-fluid" src={Poster} style={{ margin: "0 auto" }} />
            <h3>Director: {Director}</h3>
            <h3>Genre: {Genre}</h3>
            <h3>Released: {Released}</h3>
            <button className="btn btn-success" onClick={handleInputChange} name="nominated" value={Title}>Nominate</button>

        </div>
      )}
    </MovieContext.Consumer>
  );
}


export default MovieDetail;
