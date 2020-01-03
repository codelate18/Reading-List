import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const BookDetails = ({ book }) => {
  const { removeBook } = useContext(BookContext);
  return (
    <ul>
      <li onClick={() => removeBook(book.id)}>
        <div className="title">{book.title}</div>
        <div className="author">{book.author}</div>
      </li>
    </ul>
  );
};

export default BookDetails;
