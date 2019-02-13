/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

const Article = (props) => {
  const { article, author } = props;
  return (
    <div>
      <div>{article.title}</div>
      <div>{article.date}</div>
      <div>
        <a href={author.website}>{author.firstName} {author.lastName}</a>
      </div>

      <div>{article.body}</div>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    authorId: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
  author: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
  }).isRequired,
};

export default Article;
