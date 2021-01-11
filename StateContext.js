import React, { createContext, useState } from 'react';

export const StateContext = createContext();

export const WeekProvider = (props) => {
    const [Week, setWeek] = useState('Mon');
      return (
          <StateContext.Provider value={[Week, setWeek]}>
            {props.children}
          </StateContext.Provider>
      );
}