import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className='productsList'>
     <div className='headings'><h1>Social Media App</h1></div> 
     {posts.map((post) => (
        <div key={post.id} className='productsdetail'>
          <img src={`https://picsum.photos/200?random=${post.id}`} alt='Products'></img>
          <h3>{`${post.title.slice(0, 20)}...`}</h3>
          <p>{`${post.body.slice(0, 100)}...`}</p>
          <Link to={`/item/${post.id}`}>Read More...</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
