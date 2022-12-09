import React, { createContext, useContext, useReducer } from 'react';

//This prepares the data layer
export const StateContext = createContext();

//This wraps the app and provides the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//This pulls information from the data layer
export const useStateValue = () => useContext(StateContext);