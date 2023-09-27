import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getPostComments } from '../../api';

import { Loader } from '../Loader/Loader.jsx';

import { CommentCard } from './CommentCard.jsx';
import './ContentList.scss';

export const CommentsList = () => {
  const [content, setContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { contentId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setContent([]);

    getPostComments(+contentId)
      .then((comments) => {
        console.log(comments);
        setContent(comments);
      })
      .catch((error) => error)
      .finally(() => setIsLoading(false));
  }, [contentId]);

  console.log();

  return (
    <>
      {isLoading && content.length === 0 && <Loader />}

      {!isLoading && content.length !== 0 && (
        <div className="content-container">
          {content.map((item) => (
            <CommentCard key={item.id} content={item} />
          ))}
        </div>
      )}
    </>
  );
};
