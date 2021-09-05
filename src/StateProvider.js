import React, { createContext, useReducer, useContext } from "react";



// PREPARES THE DATA LAYER
export const StateContext = createContext();


// Wrap our app and provide the data layer to every component of the app
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pulling Information from DataLayer
export const useStateValue = () => useContext(StateContext);