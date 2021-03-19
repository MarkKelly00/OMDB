import React, { useContext } from "react";

// const [nominatedArr, setNominatedArr] = useState([])

const MovieContext = React.createContext({
  result: {},
  search: "",
  nominated: [],
  handleInputChange: () => {},
  handleFormSubmit: () => {}
});

// export function changeNominated(title){
//   const tempArr = [...MovieContext.nominated]
  
//   if(tempArr.length>=5) tempArr.pop()

//   tempArr[tempArr.length] = title
//   setNominatedArr(tempArr);
// }

export function useMovieContext(){
  const { result, search, handleInputChange, handleFormSubmit } = useContext(MovieContext);

  return {result, search, handleInputChange, handleFormSubmit}
}

export default MovieContext;
