import React, {useEffect, useState} from 'react';
import Context from './context';
import axios from "axios";

const globalState = ({children}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setPosts(res?.data);
    })
  }, [])

  const addNewPost = (post) => {
    setPosts([post, ...posts]);
  };

  const updatePost = (post) => {
    /*const index = posts.findIndex((item) => item?.id === post?.id);
    const newPosts = posts;
    newPosts[index] = post;*/
    setPosts(posts?.map((item)=> item?.id === post?.id ? post: item));
  };

  return (
    <Context.Provider
      value={{
        posts,
        addNewPost,
        updatePost,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default globalState
