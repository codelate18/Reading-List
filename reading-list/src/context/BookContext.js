import React, { createContext, useReducer, useEffect } from "react";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();

const BookContextProvider = props => {
  // set initial state to an empty array, no books
  //use dispatch instead of setBooks
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });

  //add a function hook once there is a change --using 'useEffect hook'
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
    //add books at the end so that it only takes effect when a new book is added
  }, [books]);

  // function to add books

  //remove the existing add and remove functions since we are now using bookReducer component
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
