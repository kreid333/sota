import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from "react"
import ContactUs from "../../components/ContactUs/ContactUs"
import Layout from "../../components/Layout"
import Reviews from "../../components/Reviews/Reviews"

const gallery = () => {
  return (
    <Layout title="Gallery">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h1 className="m-3" style={{ padding: "20px" }}>
              Gallery
            </h1>
          </div>
        </div>
        <div className="services">
          <div className="row">
            <div className="col-sm-12 service-img viewAll mb-3">
              <Link to="/gallery/all">
                <h3>View All</h3>
                <span>
                  View Photos <FontAwesomeIcon icon={faChevronCircleRight} />
                </span>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 service-img plantationShutters mb-3">
              <Link to="/gallery/plantationshutters">
                <h3>Plantation Shutters</h3>
                <span>
                  View Photos <FontAwesomeIcon icon={faChevronCircleRight} />
                </span>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 service-img solarShades mb-3">
              <Link to="/gallery/solarshades">
                <h3>Solar Shades</h3>
                <span>
                  View Photos <FontAwesomeIcon icon={faChevronCircleRight} />
                </span>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 service-img horizontalShades mb-3">
              <Link to="/gallery/horizontalshades">
                <h3>Horizontal Shades</h3>
                <span>
                  View Photos <FontAwesomeIcon icon={faChevronCircleRight} />
                </span>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 service-img verticalShades">
              <Link to="/gallery/verticalshades">
                <h3>Vertical Shades</h3>
                <span>
                  View Photos <FontAwesomeIcon icon={faChevronCircleRight} />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <Reviews />
        <ContactUs />
      </div>
    </Layout>
  )
}

export default gallery
