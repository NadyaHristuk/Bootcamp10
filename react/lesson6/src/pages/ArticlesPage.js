import React, { Component } from "react";
import * as api from "../api-mock/api";
import ArticleList from "../components/ArticleList";

export default class ArticlesPage extends Component {
  state = {
    ndsf: []
  };

  componentDidMount() {
    api.fetchAllArticles().then(articles => this.setState({ ndsf: articles }));
  }

  render() {
    const { ndsf } = this.state;
    const { match } = this.props;

    return (
      <div>
        <h2>Articles Page</h2>
        <ArticleList articles={ndsf} match={match} />
      </div>
    );
  }
}
