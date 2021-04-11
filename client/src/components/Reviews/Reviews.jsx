import React, { useEffect, useState } from "react"
import "./Reviews.css"

let num = 0

const Reviews = () => {
  // HANDLING NAVIGATION FOR CAROUSEL
  const handleNewQuote = e => {
    if (e.target.id === "next") {
      if (num === clientReviews.length - 1) {
        num = 0
        setCount(num)
      } else {
        num++
        setCount(num)
      }
    } else if (e.target.id === "prev") {
      if (num === 0) {
        num = clientReviews.length - 1
        setCount(num)
      } else {
        num--
        setCount(num)
      }
    }
  }

  const [count, setCount] = useState(0)

  const clientReviews = [
    {
      text:
        "SOTA Window Coverings is an outstanding company.  Sandy and Stephen are a pleasure to work with and their professionalism and expertise can't be beat.  My plantation shutters arrived on time, the measurements were spot on and the shutters were installed with perfection.  I highly recommend SOTA Window Coverings.",
      name: "Andrea Lawrence",
    },
    {
      text:
        "Steve and Sandy are delightful. They were professional, knowledgeable, and efficient.  I cannot image a more pleasant experience. I strongly recommend them.",
      name: "Pamela Maida",
    },
    {
      text:
        "This was one of the most stress free experience of my life. Sota Window Coverings excelled from the measurements to installation. They arrived when they said they would and it all went very smoothly. I was amazed at the difference these newly installed plantation shutters made to my condo.",
      name: "Monica Hunter",
    },
  ]

  return (
    <>
      <div className="row">
        <div className="col-sm-12 text-center">
          <h2 className="p-4 m-0">What People Are Saying</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 p-0 reviews">
          <div
            className="d-flex justify-content-center p-5"
            style={{ flexDirection: "column" }}
          >
            <p
              className="pl-4 pr-4"
              style={{ zIndex: 2 }}
              id="clientReview-text"
            >
              "{clientReviews[count]?.text}"
            </p>
            <span className="d-block text-right mr-3" id="clientReview-name">
              - {clientReviews[count]?.name}
            </span>
            <span class="dot-container">
              <span
                class={num === 0 ? "active dot" : "dot"}
                onClick={() => {
                  num = 0
                  setCount(num)
                }}
              ></span>
              <span
                class={num === 1 ? "active dot" : "dot"}
                onClick={() => {
                  num = 1
                  setCount(num)
                }}
              ></span>
              <span
                class={num === 2 ? "active dot" : "dot"}
                onClick={() => {
                  num = 2
                  setCount(num)
                }}
              ></span>
            </span>
          </div>
          <a id="prev" onClick={handleNewQuote}>
            &#10094;
          </a>
          <a id="next" onClick={handleNewQuote}>
            &#10095;
          </a>
        </div>
      </div>
    </>
  )
}

export default Reviews
