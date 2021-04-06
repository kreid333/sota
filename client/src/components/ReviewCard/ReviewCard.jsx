import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import "./ReviewCard.css"

const ReviewCard = () => {
  return (
    <div className="reviewCard shadow">
      <div className="text-center p-2">
        {[...Array(5)].map(() => (
          <FontAwesomeIcon icon={faStar} size="2x" color="gold" />
        ))}
      </div>
      <p className="m-2 text-center">
        <i>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          nulla quos explicabo facere consectetur optio incidunt, dicta hic quae
          unde nam aspernatur deleniti.
        </i>
      </p>
      <div className="text-right">
        <span>- Guest</span>
      </div>
    </div>
  )
}

export default ReviewCard
