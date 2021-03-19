import React from "react";
import { useMovieContext } from "../utils/movieContext";

function NominationList({ nominated }) {
  const { handleClick } = useMovieContext();

  return (
    <div className="text-center">
      <br />
      <p style={{ margin: "0 auto", fontSize: "20px" }}>
        {nominated.map((title, i) => (
          <li key={i} style={{
            margin: "0 auto",
            padding: 1
          }}>
            {title}{" "}
            <button
              className="btn btn-danger"
              onClick={handleClick}
              style={{
                height: "30px",
                width: "20px",
                margin: "0 auto",
                float: "right",
                padding: 1
              }}
            >
              X
            </button>
          </li>
        ))}
      </p>
      <br />
    </div>
  );
}

export default NominationList;
