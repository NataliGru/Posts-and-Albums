import React from 'react';

import './CommentCard.scss';

export const CommentCard = ({ content }) => {
  return (
    <div className="card">
      <div className="card__title">{content.name}</div>

      {content.body && <div className="card__body">{content.body}</div>}
    </div>
  );
};
