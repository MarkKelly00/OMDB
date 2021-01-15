import React from "react";
import NominatedContext from "../utils/nominated";

function NominationList() {
  return (
      <NominatedContext>
          {({search, addNomiated, handleClick}) => (
          <div className="form-group">
          <p style={{float: 'left'}}
              onChange={addNomiated}
              value={search}
              name="nominated"
            />
            <br />
            <button onClick={handleClick} className="btn btn-danger invisible" style={{height: '30px', width : '10px', float: 'right'}}>
              X
            </button>
          </div>
          )}
          </NominatedContext>
  );
}

export default NominationList;
