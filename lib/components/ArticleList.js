import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArtilceList = (props) => {
  const { articles, authors } = props;
  return (
    <div>
      {Object.values(articles).map(article => <Article key={article.id} article={article} author={authors[article.authorId]} />)}
    </div>
  );
};

export default ArtilceList;

ArtilceList.propTypes = {
  articles: PropTypes.shape(
    PropTypes.object.isRequired,
  ).isRequired,
  authors: PropTypes.shape(
    PropTypes.object.isRequired,
  ).isRequired,
};
