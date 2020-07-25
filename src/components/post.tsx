import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface posts {
  title: String;
}

const Post = () => {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:3001/api/v1/posts")
      .then((res) => {
        setPosts(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  const renderPostList = (posts: posts) => {

  }

  return (
    <div>
      Yoshida
      <ul>
      </ul>
    </div>
  );
}

export default Post;