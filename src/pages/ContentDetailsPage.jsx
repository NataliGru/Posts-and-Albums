import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { CommentsList } from '../components/Details/Comments.jsx';
import { PhotosList } from '../components/Details/Photos.jsx';


export const ContentDetailsPage = () => {
  const { userId, contentType, contentId } = useParams();
  return (
    <>
      <p className='title'>
        {`Details for ${contentType} ${contentId}:`}
      </p>

      <NavLink to={`/users/${userId}/${contentType}`} className="nav-item">
        Back
      </NavLink>

      {contentType === 'posts' && <CommentsList />}
      {contentType === 'albums' && <PhotosList />}
    </>
  );
};
