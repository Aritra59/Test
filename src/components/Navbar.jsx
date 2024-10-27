import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-around p-4 mx-20 bg-white ">
      <h1 className="text-lg font-bold">Rooted Realms</h1>
      <div className="flex space-x-4">
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/contact">Contact us</Link>
      </div>
      <button className="bg-green-700 text-white px-4 py-2 rounded">Explore Now</button>
    </nav>
  );
};

export default Navbar;
