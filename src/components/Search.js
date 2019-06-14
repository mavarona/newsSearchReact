import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    category: "general"
  };
  changeCategory = e => {
    this.setState(
      {
        category: e.target.value
      },
      () => {
        this.props.fetchNews(this.state.category);
      }
    );
  };
  render() {
    return (
      <div className="buscador row">
        <div className="col s12 m8 offset-m2">
          <form>
            <h2>Search New by Category</h2>
            <div className="input-field col s12 m8 offset-m2">
              <select onChange={this.changeCategory}>
                <option value="general">General</option>
                <option value="business">Business</option>
                <option value="entertainment">Entertainment</option>
                <option value="health">Health</option>
                <option value="science">Science</option>
                <option value="sports">Sports</option>
                <option value="technology">Technology</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  fetchNews: PropTypes.func.isRequired
};

export default Search;
