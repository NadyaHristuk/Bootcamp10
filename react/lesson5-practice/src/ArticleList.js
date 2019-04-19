import React from "react";

const ArticleList = ({ articles }) => (
  <ul>
    {articles.map(({ id, link, name }) => (
      <li key={id}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </li>
    ))}
  </ul>
);

export default ArticleList;
