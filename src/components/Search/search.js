import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      data: this.props.inventory,
      searchResult: [],
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };



  render() {
      const {query} = this.state
      console.log("search",this.props)
    return (
      <div className="Search-Box">
          <form onSubmit={(e) => this.props.search(e, query)}>
        <input
          className="Search-Input"
          type="text"
          name='query'
          placeholder="Search..."
          value={this.state.query}
          onChange={(e) => this.handleInputChange(e)}
        />
        <input type='submit' value='Submit'></input>
        </form>
        <button className="Search-Button" onClick={this.props.reset}>
      Reset
        </button>
      </div>
    );
  }
}

export default Search;
