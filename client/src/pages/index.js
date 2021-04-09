import React from "react"
import Layout from "../components/Layout"
import { Carousel } from "react-bootstrap"
import IMG1 from "../images/index/IMG_5117.jpg"
import IMG2 from "../images/index/IMG_5119.jpg"
import IMG3 from "../images/index/IMG_5120.jpg"
import IMG5 from "../images/index/IMG_5130.jpg"
import IMG6 from "../images/index/IMG_5131.jpg"
import IMG7 from "../images/index/IMG_5136.jpg"
import IMG8 from "../images/index/IMG_5138.jpg"
import SOTA from "../images/logo/SOTA.png"
import "./styles/index.css"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons"
import ContactUs from "../components/ContactUs/ContactUs"
import Reviews from "../components/Reviews/Reviews"

export default function Home() {
  return (
    <Layout title="SOTA Window Coverings - Window Coverings in Delray Beach Florida">
      <div className="row hero m-0">
        <div className="col-lg-3 p-0">
          <div className="background">
            <img className="align-self-center mx-auto pt-3 pb-3" src={SOTA} />
            <h4>4624 Danson Way</h4>
            <h4>Delray Beach, FL 33445</h4>
            <h4>
              Phone:{" "}
              <a href="tel:5617054900" style={{ color: "black" }}>
                (561) 705-4900
              </a>
            </h4>
          </div>
        </div>
        <div className="col-lg-9 p-0">
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100 image"
                src={IMG1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 image"
                src={IMG2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 image"
                src={IMG3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="row m-0">
        <div className="col-sm-12 text-center" id="consultations">
          <h1 className="d-flex justify-content-center">
            FREE IN HOME CONSULTATIONS!
          </h1>
          <Link to="/contact">
            <button className="mt-3 button shadow">Contact Us</button>
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="row mt-3">
          <div className="col-sm-12 text-center">
            <h1
              classname="m-4"
              style={{ fontWeight: "bold", fontSize: "60px" }}
            >
              SOTA Window Coverings
            </h1>
            <h3 className="m-3">Located in Delray Beach, Florida</h3>
            <p>
              When local home and business owners need window treaments, they
              contact SOTA Window Coverings to get the job done. That's because
              for over 15 years, we have been providing quality service to both
              residential and commercial clients in the Delray Beach area. Here
              at SOTA Windown Coverings, we go the extra mile to ensure that all
              of our clients receive the attention they need.
            </p>
            <Link to="/gallery">
              <button
                className="m-3 button shadow"
                style={{ backgroundColor: "black" }}
              >
                See Gallery
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="row m-0">
        <div className="col-sm-3 p-0">
          <img className="banner" src={IMG5} />
        </div>
        <div className="col-sm-3 p-0">
          <img className="banner" src={IMG6} />
        </div>
        <div className="col-sm-3 p-0">
          <img className="banner" src={IMG7} />
        </div>
        <div className="col-sm-3 p-0">
          <img className="banner" src={IMG8} />
        </div>
      </div>
      <div className="container">
        {/* SERVICES */}
        <div className="row">
          <div className="col-sm-12 text-center">
            <h2 className="m-3" style={{ padding: "10px" }}>
              Services
            </h2>
            <div className="services">
              <div className="row">
                <div className="col-sm-6 service-img plantationShutters">
                  <Link to="/gallery/plantationshutters">
                    <h3>Plantation Shutters</h3>
                    <span>
                      Learn More <FontAwesomeIcon icon={faChevronCircleRight} />
                    </span>
                  </Link>
                </div>
                <div className="col-sm-6 service-img solarShades">
                  <Link to="/gallery/solarshades">
                    <h3>Solar Shades</h3>
                    <span>
                      Learn More <FontAwesomeIcon icon={faChevronCircleRight} />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 service-img horizontalShades">
                  <Link to="/gallery/horizontalshades">
                    <h3>Horizontal Shades</h3>
                    <span>
                      Learn More <FontAwesomeIcon icon={faChevronCircleRight} />
                    </span>
                  </Link>
                </div>
                <div className="col-sm-6 service-img verticalShades">
                  <Link to="/gallery/verticalshades">
                    <h3>Vertical Shades</h3>
                    <span>
                      Learn More <FontAwesomeIcon icon={faChevronCircleRight} />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Reviews />
        <ContactUs />
      </div>
    </Layout>
  )
}
