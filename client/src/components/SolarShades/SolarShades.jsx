import React from "react"
import IMG from "../../images/gallery/solarshades/IMG_5186.jpg"
import IMG1 from "../../images/gallery/solarshades/IMG_5187.jpg"
import IMG2 from "../../images/gallery/solarshades/IMG_5188.jpg"
import IMG3 from "../../images/gallery/solarshades/IMG_5189.jpg"
import IMG4 from "../../images/gallery/solarshades/IMG_5190.jpg"
import IMG5 from "../../images/gallery/solarshades/IMG_5191.jpg"
import IMG6 from "../../images/gallery/solarshades/IMG_5192.jpg"
import IMG7 from "../../images/gallery/solarshades/IMG_5193.jpg"
import IMG8 from "../../images/gallery/solarshades/IMG_5194.jpg"

const SolarShades = () => {
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
      <div className="row">
        <div className="col-sm-12 mb-3 imgDiv">
          <img className="w-100 h-100 galleryImg" src={IMG8} alt="" />
        </div>
      </div>
    </>
  )
}

export default SolarShades
