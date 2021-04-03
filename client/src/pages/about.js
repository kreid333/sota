import React from "react"
import Layout from "../components/Layout"
import "./styles/about.css"
import ContactUs from "../components/ContactUs/ContactUs"
import Reviews from "../components/Reviews/Reviews"
import IMG4 from "../images/IMG_5118.jpg"

const about = () => {
  return (
    <Layout title="About">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h1 className="m-3" style={{ padding: "20px" }}>
              About Us
            </h1>
          </div>
        </div>
        <div>
          <div className="row">
            <div className="col-xl-8 my-auto about-text">
              <p className="p-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Suscipit laborum, sapiente laboriosam eligendi voluptates enim
                id molestiae molestias placeat voluptatum perspiciatis
                architecto ipsam eum quos, dignissimos vero esse modi atque
                porro vel consequatur nam fugit nihil. Accusamus cum cumque ipsa
                aut quae non dolores, beatae, consequuntur maxime nisi soluta
                quasi!
              </p>
            </div>
            <div className="col-xl-4 text-center about-img">
              <img className="imgBubble" src={IMG4} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 text-center">
              <img className="imgBubble" src={IMG4} alt="" />
            </div>
            <div className="col-xl-8 my-auto">
              <p className="p-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Suscipit laborum, sapiente laboriosam eligendi voluptates enim
                id molestiae molestias placeat voluptatum perspiciatis
                architecto ipsam eum quos, dignissimos vero esse modi atque
                porro vel consequatur nam fugit nihil. Accusamus cum cumque ipsa
                aut quae non dolores, beatae, consequuntur maxime nisi soluta
                quasi!
              </p>
            </div>
          </div>
        </div>
        <Reviews />
        <ContactUs />
      </div>
    </Layout>
  )
}

export default about
