import React, { useState, useEffect, useContext } from "react";
import {useQuery} from "@apollo/react-hooks"; 
import { useMutation } from "@apollo/react-hooks";

import { ADD_BOOK, GET_AUTHORS, GET_BOOKS } from "../queries/queries";

function DisplayAuthors() {
  const { loading, error, data } = useQuery(GET_AUTHORS);

  if (loading) return <option disabled>Loading authors</option>;
  if (error) return <option disabled>Error</option>;
  
  return data.authors.map(author => {
    return (
      <option key={author.id} value={author.id}>
        {author.name}
      </option>
    );
  });
}


const AddBook = () => {
  const [name, setName] = useState("");
  const [gerne, setGerne] = useState("");
  const [authorId, setAuthorId] = useState("");
  
  useEffect(() => console.log(name, gerne, authorId));

  const submitForm = e => {
    e.preventDefault();
    addBook({variables:{name, gerne, authorId}, refetchQueries: [{ query: GET_BOOKS }]});
  };

  
  const [addBook] = useMutation(ADD_BOOK);
  return (
    <form id="add-book">
      <div className="field">
        <label>Book name:</label>
        <input type="text" onChange={e => setName(e.target.value)} />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input type="text" onChange={e => setGerne(e.target.value)} />
      </div>
      <div className="field">
        <label>Author:</label>
        <select onChange={e => setAuthorId(e.target.value)}>
          <option>Select author</option>
          {DisplayAuthors()}
        </select>
      </div>
      <button type="reset" onClick={e => submitForm(e)}>
        +
      </button>
    </form>
  );
};
export default AddBook;
