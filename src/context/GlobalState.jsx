import AppReducer from "./AppReducer";
import React, { createContext, useReducer } from "react";

//Initial State
const initialState = {
    transactions: []
}

//Create context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GLobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions that make call to the reducer
    //payload is any data to be sent 
    function deleteTransaction(id) {
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
    });
    }

    function addTransaction(transaction) {
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
        </GlobalContext.Provider>);
}