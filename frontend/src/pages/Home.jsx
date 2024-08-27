import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import "../styles/custom.css";
// Import the custom CSS

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://bookstore-41.onrender.com/books")
      .then((response) => {
        if (response.data) {
          setBooks(response.data);
        } else {
          setBooks([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setBooks([]);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Books List</h1>
        <Link to="/books/create" className="btn btn-primary">
          <MdOutlineAddBox size={24} />
          &nbsp; Add Book
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr className="custom-header">
                <th scope="col">No</th>
                <th scope="col">Title</th>
                <th scope="col" className="d-none d-md-table-cell">
                  Author
                </th>
                <th scope="col" className="d-none d-md-table-cell">
                  Publish Year
                </th>
                <th scope="col">Operations</th>
              </tr>
            </thead>
            <tbody>
              {books.length > 0 ? (
                books.map((book, index) => (
                  <tr key={book._id}>
                    <td className="custom-cell">{index + 1}</td>
                    <td className="custom-cell">{book.title}</td>
                    <td className="custom-cell d-none d-md-table-cell">
                      {book.author}
                    </td>
                    <td className="custom-cell d-none d-md-table-cell">
                      {book.publishYear}
                    </td>
                    <td className="custom-cell">
                      <div className="d-flex justify-content-around">
                        <Link
                          to={`/books/details/${book._id}`}
                          className="text-success"
                        >
                          <BsInfoCircle size={24} />
                        </Link>
                        <Link
                          to={`/books/edit/${book._id}`}
                          className="text-warning"
                        >
                          <AiOutlineEdit size={24} />
                        </Link>
                        <Link
                          to={`/books/delete/${book._id}`}
                          className="text-danger"
                        >
                          <MdOutlineDelete size={24} />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">
                    No books available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Home;
