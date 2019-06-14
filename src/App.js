import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import ListNews from "./components/ListNews";
import Search from "./components/Search";

class App extends Component {
  state = {
    news: []
  };
  componentDidMount() {
    this.fetchNews();
  }

  fetchNews = async (category = "general") => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=7378c4674cb641e5b38b4773685dc452`;
    const response = await fetch(url);
    const news = await response.json();
    this.setState({ news: news.articles });
  };

  render() {
    return (
      <Fragment>
        <Header title="News React API" />
        <div className="container white contenedor-noticias ">
          <Search fetchNews={this.fetchNews} />
          <ListNews news={this.state.news} />
        </div>
      </Fragment>
    );
  }
}

export default App;
