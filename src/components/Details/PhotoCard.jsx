import React from 'react';

import './CommentCard.scss';

export const PhotoCard = ({ content }) => {
  return (
    <div className="card">
      <div className="card__title">{content.title}</div>

      <img className="card__img" src={content.thumbnailUrl} alt={content.title} />
    </div>
  );
};
