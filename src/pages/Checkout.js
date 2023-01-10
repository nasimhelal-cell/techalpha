import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
const Checkout = () => {
  return (
    <div>
      <p className="text-center py-5 px-3 text-3xl">
        I will develop this page when we learn firebase authetication
      </p>
      <Link
        to="/products"
        className="flex justify-center items-center gap-3 text-teal-400"
      >
        <BsArrowLeft />
        <p>Continue shopping</p>
      </Link>
    </div>
  );
};

export default Checkout;
