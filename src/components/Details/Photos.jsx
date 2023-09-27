import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getAlbumPhotos } from '../../api';

import { Loader } from '../Loader/Loader.jsx';

import { PhotoCard } from './PhotoCard.jsx';
import './ContentList.scss';

export const PhotosList = () => {
  const [content, setContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { contentId} = useParams();

  useEffect(() => {
    setIsLoading(true);
    setContent([]);

    getAlbumPhotos(+contentId)
      .then(setContent)
      .catch((error) => error)
      .finally(() => setIsLoading(false));
  }, [contentId]);

  return (
    <>
      {isLoading && content.length === 0 && <Loader />}

      {!isLoading && content.length !== 0 && (
        <div className="content-container">
          {content.map((item) => (
            <PhotoCard key={item.id} content={item} />
          ))}
        </div>
      )}
    </>
  );
};
