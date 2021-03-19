import React, { useState } from "react";
import MovieContext from "../utils/movieContext";
import MovieDetail from '../components/MovieDetail';

function NominationList(props) {
  console.log('props are ', props)
  const { nominated } = props;
  console.log('the title is ', nominated)
  return (
        <div className="text-center">
          <button className="btn btn-danger" style={{ height: "30px", width: "20px", margin: "0 auto", float: "right"}}>X</button>
          <p style={{ margin: "0 auto", fontSize: '20px'}}>{nominated}</p>
        </div>
  );
}

export default NominationList;
