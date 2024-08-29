import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://bookproject-3.onrender.com/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError("Failed to fetch book details. Please try again.");
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="container my-4">
      <BackButton />
      <h1 className="text-center my-4">Book Details</h1>
      {loading ? (
        <Spinner />
      ) : error ? (
        <div className="alert alert-danger">{error}</div>
      ) : (
        <div className="card mx-auto shadow-sm" style={{ maxWidth: "24rem" }}>
          <div className="card-body">
            <h5 className="card-title">{book.title || "No Title Available"}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {book.author || "No Author Available"}
            </h6>
            <p className="card-text">
              <strong>Publish Year: </strong>
              {book.publishYear || "N/A"}
            </p>
            <p className="card-text">
              <strong>Created At: </strong>
              {book.createdAt
                ? new Date(book.createdAt).toLocaleString()
                : "N/A"}
            </p>
            <p className="card-text">
              <strong>Updated At: </strong>
              {book.updatedAt
                ? new Date(book.updatedAt).toLocaleString()
                : "N/A"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
