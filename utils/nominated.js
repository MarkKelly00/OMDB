import React from "react";

const NominatedContext = React.createContext({
  result: {},
  addNominated: () => {},
  handleClick: () => {}
});

export default NominatedContext;