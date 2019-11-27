import React, { useState, useEffect, useContext } from "react";
import { useQuery, useSubscription } from "@apollo/react-hooks";
import BookDetail from "./BookDetail";
import DetailContext from "../detail-context";
import {GET_BOOKS, BOOKS_SUBSCRIPTION } from "../queries/queries";

const DisplayBooks = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const [detail, setDetail] = useState("");
  const book = useContext(DetailContext);
  //const { loading, error, data } = useSubscription(BOOKS_SUBSCRIPTION);
  useEffect(() => {
    book.bookId = detail
    console.log(book.bookId)
  }, [detail]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.books.map(({ _id, name }) => {
    return (
    <li key={_id} onClick={() => setDetail(_id)}>
      {_id}: {name}; 
    </li>
  )});
};

const BookList = () => {
  return (
    <div>
      <ul>{DisplayBooks()}</ul>
      <BookDetail/>
    </div>
  );
}
export default BookList;
