import React from "react"
import IMG from "../../images/gallery/horizontalshades/IMG_5195.jpg"
import IMG1 from "../../images/gallery/horizontalshades/IMG_5196.png"
import IMG2 from "../../images/gallery/horizontalshades/IMG_5197.jpg"
import IMG3 from "../../images/gallery/horizontalshades/IMG_5198.jpg"
import IMG4 from "../../images/gallery/horizontalshades/IMG_5199.jpg"
import IMG5 from "../../images/gallery/horizontalshades/IMG_5200.jpg"
import IMG6 from "../../images/gallery/horizontalshades/IMG_5201.jpg"
import IMG7 from "../../images/gallery/horizontalshades/IMG_5202.jpg"

const HorizontalShades = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-6 mb-3 imgDiv">
          <img className="w-100 h-100 galleryImg" src={IMG} alt=""/>
        </div>
        <div className="col-sm-6 mb-3 imgDiv">
          <img className="w-100 h-100 galleryImg" src={IMG1} alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 mb-3 imgDiv">
          <img className="w-100 h-100 galleryImg" src={IMG2} alt="" />
        </div>
        <div className="col-sm-6 mb-3 imgDiv">
          <img className="w-100 h-100 galleryImg" src={IMG3} alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 mb-3 imgDiv">
          <img className="w-100 h-100 galleryImg" src={IMG4} alt="" />
        </div>
        <div className="col-sm-6 mb-3 imgDiv">
          <img className="w-100 h-100 galleryImg" src={IMG5} alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 mb-3 imgDiv">
          <img className="w-100 h-100 galleryImg" src={IMG6} alt="" />
        </div>
        <div className="col-sm-6 mb-3 imgDiv">
          <img className="w-100 h-100 galleryImg" src={IMG7} alt="" />
        </div>
      </div>
    </>
  )
}

export default HorizontalShades
