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
                A small family owned business providing professional Window
                Treatments to homes and businesses in the Delray Beach and
                surrounding areas for the past 9 years. We specialize in
                Plantation Shutters in Wood and Poly, Solar Shades, Horizontal
                Shades and Verticals.
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
                Areas we currently serve include: Atlantis, Boca Del Mar, Boca
                Pointe, Boca Raton, Boynton Beach, Briny Breezes, Deerfield
                Beach, Delray Beach, Dunes Road, Golf, Gulf Stream, Hamptons at
                Boca Raton, Highland Beach, Hillsboro Pines, Hypoluxo, Kings
                Point, Lake Worth, Lantana, Manalapan, Mission Bay, Ocean Ridge,
                Seminole Manor, South Palm Beach, Villages of Oriole, Whisper
                Walk, Fort Lauderdale, and Miami
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
