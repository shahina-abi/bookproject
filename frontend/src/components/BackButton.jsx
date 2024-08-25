import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

function BackButton({ destination = "/" }) {
  return (
    <div className="mb-3">
      <Link to={destination} className="btn btn-primary">
        <BsArrowLeft className="me-2" />
        Back
      </Link>
    </div>
  );
}

export default BackButton;
