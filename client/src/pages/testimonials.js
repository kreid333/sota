import React from "react"
import Layout from "../components/Layout"
import SOTA from "../images/logo/SOTA.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import "./styles/testimonials.css"
import ReviewCard from "../components/ReviewCard/ReviewCard"
import ContactUs from "../components/ContactUs/ContactUs"
import userReviews from "../data/reviews.json"

const testimonials = () => {
  return (
    <Layout title="Testimonials">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h1 className="m-3" style={{ padding: "20px" }}>
              Testimonals
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 text-center">
            <img src={SOTA} alt="SOTA Window Coverings" width="65%"></img>
          </div>
          <div className="col-sm-6 text-center my-auto pt-4 pb-4">
            {[...Array(5)].map(() => (
              <FontAwesomeIcon icon={faStar} size="4x" color="gold" />
            ))}
            <br />
            <br />
            <span className="rating d-block p-3 mx-auto">5/5</span>
          </div>
        </div>
        <br />
        <div className="row mb-5">
          <div className="col-sm-12 text-center">
            <button className="button reviewBtn">Submit a review</button>
          </div>
        </div>
        <div> 
          {userReviews.map(review => (
            <ReviewCard
              name={review.name}
              text={review.review}
              rating={review.rating}
            />
          ))}
        </div>
        <ContactUs />
      </div>
    </Layout>
  )
}

export default testimonials
