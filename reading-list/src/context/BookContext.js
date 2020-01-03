import React, { createContext, useState, useReducer } from "react";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();

const BookContextProvider = props => {
  // set initial state to an empty array, no books
  //use dispatch instead of setBooks
  const [books, dispatch] = useReducer(bookReducer, []);

  // function to add books

  //remove the existing add and remove functions since we are now using bookReducer component
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
