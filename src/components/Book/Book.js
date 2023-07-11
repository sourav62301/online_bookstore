import { Button } from "@mui/material";
import React from "react";
import "./Book.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Book = (props) => {
  const history = useNavigate();

  const { _id, title, author, description, price, customer_rating, image } =
    props.book;

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/books/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/books"));
  };

  return (
    <div className="card">
      <img src={image} alt={title} />
      <article>By {author}</article>
      <h3>{title}</h3>
      <p>{description}</p>
      <h2> ₹{price}</h2>
      <h6>Rating : {customer_rating}/5</h6>
      <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button>
    </div>
  );
};
