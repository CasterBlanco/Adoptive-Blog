import React, { useState, createContext, useContext } from 'react';

const HeartContext = createContext();

export const HeartProvider = ({ children }) => {
  const [heartStates, setHeartStates] = useState(() => {
    const storedHeartStates = JSON.parse(localStorage.getItem('heartStates')) || {
      'heart-1': true,
      'heart-2': false,
      'heart-3': true,
      'heart-4': false,
      'heart-5': true,
      'heart-6': false,
      'heart-7': true,
      'heart-8': false,
      'heart-9': false,
      'heart-10': false,
      'heart-11': true,
      'heart-12': false,
      'heart-13': false,
      'heart-14': false,
      'heart-15': true,
      'heart-16': false,
      'heart-17': false,
      'heart-18': true,
      'heart-19': false,
      'heart-20': false,
      'heart-first': false,
      'heart-01': false,
      'heart-jc': true,
      'dark': false,

    };
    return storedHeartStates;
  });

  const [heartCounts, setHeartCounts] = useState({
    'heart-1': 25,
    'heart-first': 25,
    'heart-01': 0,
    'heart-jc': 127,
    'dark': 24,
    'MLS' : 40,
    'heart-2': 15,
    'heart-3': 35,
    'heart-4': 45,
    'heart-5': 31,
    'heart-6': 95,
    'heart-7': 54,
    'heart-8': 29,
    'heart-9': 31,
    'heart-10': 11,
    'heart-11': 21,
    'heart-12': 51,
    'heart-13': 34,
    'heart-14': 81,
    'heart-15': 55,
    'heart-16': 90,
    'heart-17': 83,
    'heart-18': 69,
    'heart-19': 82,
    'heart-20': 56,
  });



  const toggleHeart = (id) => {
    setHeartStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  
    setHeartCounts((prevCounts) => {
      const updatedCounts = { ...prevCounts };
  
      if (heartStates[id]) {
        updatedCounts[id] -= 1; 
      } else {
        updatedCounts[id] += 1; 
      }
  
      return updatedCounts;
    });
  };

  
  const heart= (id) => {
    return heartStates[id] ? 'heart active' : 'heart';
  };
  


  return (
    <HeartContext.Provider value={{ heartCounts, toggleHeart, heart, heartStates  }}>
      {children}
    </HeartContext.Provider>
  );
};

export const useHeartContext = () => {
  return useContext(HeartContext);
};