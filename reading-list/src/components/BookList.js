import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="book-list">
      {books.map(book => {
        return <BookDetails book={book} key={book.id} />;
      })}
    </div>
  ) : (
    <div className="empty">No Books to read currently. Hello free time :)</div>
  );
};

export default BookList;
