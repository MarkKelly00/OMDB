import React, { useContext } from "react";

// const [nominatedArr, setNominatedArr] = useState([])

const MovieContext = React.createContext({
  result: {},
  search: "",
  nominated: [],
  handleInputChange: () => {},
  handleFormSubmit: () => {},
  handleClick: () => {}
});


export function useMovieContext(){
  const { result, search, handleInputChange, handleFormSubmit, handleClick } = useContext(MovieContext);

  return {result, search, handleInputChange, handleFormSubmit, handleClick}
}

export default MovieContext;
