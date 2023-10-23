import React, { createContext, useContext, useState } from 'react';

const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
  const [commentCounts, setCommentCounts] = useState({
    'blog-1': 2,
    'blog-2': 2,
    'blog-3': 2,
    'blog-4': 3,
    'blog-5': 3,
    'blog-6': 3,
    'blog-7': 3,
    'blog-8': 2,
    'blog-9': 3,
    'blog-10': 3,
    'blog-11': 3,
    'blog-12': 2,
    'blog-13': 3,
    'blog-14': 3,
    'blog-15': 3,
    'blog-16': 3,
    'blog-17': 3,
    'blog-18': 3,
    'blog-19': 3,
    'blog-20': 3,
  });

  const incrementCommentCount = (id) => {
    setCommentCounts((prevCounts) => ({
      ...prevCounts,
      [id]: prevCounts[id] + 1,
    }));
  };

  return (
    <CommentContext.Provider value={{ commentCounts, incrementCommentCount }}>
      {children}
    </CommentContext.Provider>
  );
};

export const useCommentContext = () => {
  return useContext(CommentContext);
};