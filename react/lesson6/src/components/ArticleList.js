import React from "react";
import { Link } from "react-router-dom";

const ArticleList = ({ articles, match }) => (
  <ul>
    {articles.map(article => (
      <li key={article.id}>
        <Link to={`${match.url}/${article.id}`}>{article.title}</Link>
      </li>
    ))}
  </ul>
);

export default ArticleList;
