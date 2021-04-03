import React from "react";
import "./Reviews.css";

const Reviews = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-12 text-center">
          <i><h1 className="m-4" style={{ padding: "10px", border: "1px solid black"}}>
            What People Are Saying
          </h1></i>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 p-0 text-center reviews mb-5">
          <div className="d-flex">
            <span className="quote">“</span>
            <p
              className="justify-content-center align-self-center pl-4 pr-4"
              style={{ zIndex: 2 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              quis, asperiores recusandae provident vitae eos, accusamus omnis
              sequi harum suscipit cumque libero itaque beatae unde iusto dicta
              labore dolores voluptatem eius? Harum vel corporis, nostrum
              adipisci mollitia quam recusandae? Fugit consectetur voluptas
              aspernatur rem similique accusamus quam asperiores veniam nisi!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reviews
