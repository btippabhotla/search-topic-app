import React from "react";
import './App.css';
import SearchBar from './components/searchbar';
import DisplayContent from "./components/display";


class App extends React.Component {

  state = { searchTerm: 'react', click: 0 };

  constructor() {
    super();
  }
  
  handleSearchChange = key => {
    //update the search term when user type in the search bar
    this.setState({ searchTerm: key });
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render(){
    //check to see if react will re-render
    return (
      
      <div>
        <SearchBar initSearch={this.state.searchTerm} onSearchChange={this.handleSearchChange}></SearchBar>
        <div className="jumbotron">
          <DisplayContent search={this.state.searchTerm}></DisplayContent>
        </div>
     
      </div>
    );
  }
}

export default App;
