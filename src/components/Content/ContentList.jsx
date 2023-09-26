import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getUserContent } from '../../api';

import { Loader } from '../Loader/Loader.jsx';

import { ContentCard } from './ContentCard.jsx';
import './ContentList.scss';

export const ContentList = () => {
  const [content, setContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { userId, contentType } = useParams();

  const selectedUser = userId ? +userId : 0;

  useEffect(() => {
    setIsLoading(true);
    setContent([]);

    getUserContent(contentType, selectedUser)
      .then(setContent)
      .catch((error) => error)
      .finally(() => setIsLoading(false));
  }, [selectedUser, contentType]);

  return (
    <>
      {isLoading && content.length === 0 && <Loader />}

      {!isLoading && content.length !== 0 && (
        <div className="content-container">
          {content.map((item) => (
            <ContentCard key={item.id} content={item} />
          ))}
        </div>
      )}
    </>
  );
};
