import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`https://bookproject-3.onrender.com/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. Please check console");
        console.log(error);
      });
  };

  return (
    <div className="container mt-4">
      <BackButton />
      <h1 className="mb-4">Delete Book</h1>
      {loading && <Spinner />}
      <div
        className="border rounded p-4 mx-auto text-center bg-light shadow-sm"
        style={{ maxWidth: "600px" }}
      >
        <h3 className="mb-4">Are you sure you want to delete this book?</h3>
        <button className="btn btn-danger" onClick={handleDeleteBook}>
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
