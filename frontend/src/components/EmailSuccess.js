import React from "react";
import { Link } from "gatsby";

export const EmailSuccess = () => {
  return (
    <div>
      <h3 className="w-full my-2 text-3xl leading-tight text-center text-gray-800">
        Thank you! Please check your email inbox and confirm your subscription.
      </h3>
      <Link to="/">
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Go back to main page
        </button>
      </Link>
    </div>
  );
};
