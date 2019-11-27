import React, { useState, useEffect, useContext } from "react";
import { useQuery} from "@apollo/react-hooks";
import DetailContext from '../detail-context'

const BookDetail = () => {
  const book = useContext(DetailContext);
  useEffect(() => {
    console.log(book.bookId)
  });

  if (book.bookId) {
    return (
      <div>
        {/* <h2>{book.name}</h2>
        <p>{book.genre}</p>
        <p>{book.author.name}</p>
        <p>All books by this author:</p>
        <ul className="other-books">
          {book.author.books.map(item => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul> */}
        <p>{book.bookId}</p>
      </div>
    );
  } else {
    return <div>No book selected...</div>;
  }
};

export default BookDetail;