import React, { useEffect } from 'react';
import axios from 'axios';

const Post = () => {
  useEffect(() => {
    axios.get("http://localhost:3001/api/v1/posts")
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);
  return (
    <div>
      Yoshida
    </div>
  );
}

export default Post;