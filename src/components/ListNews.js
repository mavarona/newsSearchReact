import React from "react";
import New from "./New";
import PropTypes from "prop-types";

const ListNews = ({ news }) => (
  <div className="row">
    {news.map(newArticle => (
      <New key={newArticle.url} newArticle={newArticle} />
    ))}
  </div>
);

ListNews.propTypes = {
  news: PropTypes.array.isRequired
};

export default ListNews;
