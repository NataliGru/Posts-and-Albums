import React from 'react';

import './ContentCard.scss';

export const ContentCard = ({ content }) => {
  return (
    <div className="card">
      <div className="card__title">{content.title}</div>

      {content.body && (
        <div className="card__body">
          {content.body}
        </div>
      )}
    </div>
  );
};
