import React, { Component } from "react";
import Header from "./Header";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import NominationList from "./Nomination";
import MovieDetail from "./MovieDetail";
import Footer from './Footer';
import API from "../utils/API";
import MovieContext from "../utils/movieContext";

class OmdbContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: {},
      nominated: [],
      search: "",
    }
    this.handleClick = this.handleClick.bind(this);
  }

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchMovies("The Matrix");
  }

  searchMovies = (query) => {
    API.search(query)
      .then((res) => this.setState({ result: res.data }))
      .catch((err) => console.log(err));
  };

  disabledBTN = (titleToCheck) => {
    if (this.state.nominated.includes(titleToCheck)) {
      return true;
    }
    return false;
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    // changeNominated(name);
    if ((name === "nominated")) {
      let tempArr = [...this.state.nominated];

      if (tempArr.length >= 5) {
        if (window.confirm("Nomination List Is Full, Add New Nominee?")) {
          tempArr.shift();
        } else {
          return tempArr;
        }
      }

      tempArr[tempArr.length] = value;
      this.setState({[name]: tempArr});
    } else {
      this.setState({
        [name]: value,
      });
    }
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchMovies(this.state.search);
  };

  handleClick = (nominated, index) => {
    if(window.confirm("Are you sure you want to delete this nominee?")){
      let title = [...this.state.nominated]
      title.splice(index, 1);
      this.setState({nominated: title})
  }
  };

  render() {
    return (
      // Pass state and the two form handler functions into the provider
      <MovieContext.Provider
        value={{
          ...this.state,
          handleInputChange: this.handleInputChange,
          handleFormSubmit: this.handleFormSubmit,
          handleClick: this.handleClick,
        }}
      >
        <Header />
        <Container>
          <Row className='bg-secondary'>
            <Col size="md-4">
              <Card heading="Search">
                <SearchForm />
              </Card>
              <br />
              <Card heading="Nominated">
                <NominationList nominated={this.state.nominated} handleClick={this.handleClick} />
              </Card>
            </Col>
            <Col size="md-8">
              <Card
                heading={
                  this.state.result.Title || "Search for a Movie to Begin"
                }
              >
                {this.state.result.Title ? (
                  <MovieDetail nominated={this.state.nominated} disabledBTN={this.disabledBTN}/>
                ) : (
                  <h3>No Results to Display</h3>
                )}
              </Card>
            </Col>
          </Row>
        </Container>
        <Footer />
      </MovieContext.Provider>
    );
  }
}

export default OmdbContainer;
