import React from "react";
import { AiFillStar } from "react-icons/ai";

const Testimoni = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">TESTIMONIAL</h1>
        <p className="primary-text">
        Apa yang mereka rasakan setelah bergabung bersama kami?
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src="" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John Doe</h2>
      </div>
    </div>
  );
};

export default Testimoni;