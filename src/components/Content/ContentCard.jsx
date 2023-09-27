import React from 'react';

import './ContentCard.scss';
import { Link, useParams } from 'react-router-dom';

export const ContentCard = ({ content }) => {
  return (
    <div className="card">
      <div className="card__title">{content.title || content.name}</div>

      {content.body && <div className="card__body">{content.body}</div>}

      <Link className="card__link" to={`${content.id}/details`}>
        Open
      </Link>
    </div>
  );
};
