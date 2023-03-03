import React from 'react';

const Context = React.createContext({
  posts: [],
  addNewPost : (post) => {},
  updatePost : (post) => {},
});

export default Context;
