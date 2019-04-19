import React, { Component } from "react";
import * as api from "../api-mock/api";
import Article from "../components/Article";

export default class ItemPage extends Component {
  state = {
    id: null,
    title: null,
    imageUrl: null,
    author: null,
    category: null,
    body: null
  };

  componentDidMount() {
    api
      .fetchArticleById(this.props.match.params.id)
      .then(item => this.setState({ ...item }));
  }

  handleGoBack = () => {
    const { state } = this.props.location;
    const { category } = this.state;

    console.log(state);

    if (state) {
      return this.props.history.push({
        pathname: "/articles",
        search: state.from
      });
    }

    this.props.history.push({
      pathname: "/articles",
      search: `?category=${category}`
    });
  };

  render() {
    const { title, imageUrl, author, category, body } = this.state;
    return (
      <Article
        title={title}
        imageUrl={imageUrl}
        author={author}
        category={category}
        body={body}
        onClick={this.handleGoBack}
      />
    );
  }
}
