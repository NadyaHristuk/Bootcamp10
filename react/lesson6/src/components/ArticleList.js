import React from "react";
import { Link, withRouter } from "react-router-dom";

const ArticleList = ({ articles, match, location }) => (
  <ul>
    {articles.map(article => (
      <li key={article.id}>
        <Link
          to={{
            pathname: `${match.url}/${article.id}`,
            state: { from: location.search }
          }}
        >
          {article.title}
        </Link>
      </li>
    ))}
  </ul>
);

export default withRouter(ArticleList);
