import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Items = () => {
  const { id } = useParams();
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === parseInt(id))
  );

  return (
    <div>
       <div className='headings'><h1>Social Media App</h1></div>       
      {post ? (
        <div className='selected-items'>
          <h2>Details Page For Posts With Id: {post.id}</h2>
          <img src={`https://picsum.photos/200?random=${post.id}`}></img>
          <h3>User id: {post.userId}</h3>
          <h3>Title: {post.title}</h3>
          <h3>Body: {post.body}</h3>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Items;
