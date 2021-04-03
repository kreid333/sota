import React from "react"
import Layout from "../components/Layout"
import { Carousel } from "react-bootstrap"
import IMG1 from "../images/IMG_5117.jpg"
import IMG2 from "../images/IMG_5119.jpg"
import IMG3 from "../images/IMG_5120.jpg"
import IMG5 from "../images/IMG_5130.jpg"
import IMG6 from "../images/IMG_5131.jpg"
import IMG7 from "../images/IMG_5136.jpg"
import IMG8 from "../images/IMG_5138.jpg"
import SOTA from "../images/SOTA.png"
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
          <button className="mt-3 button shadow">Contact Us</button>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              nulla quos explicabo facere consectetur optio incidunt, dicta hic
              quae unde nam aspernatur deleniti. Fugiat quod fugit voluptatibus
              laboriosam impedit esse soluta quasi nostrum, a nam dolores quidem
              rem placeat nemo explicabo at, tempora libero delectus repellat
              voluptates aliquam, quos voluptatem. Quisquam distinctio autem
              iusto nostrum eveniet ullam pariatur. Dicta officiis eius eveniet
              placeat enim expedita ex laborum. Et nihil, a iste, voluptatum sed
              hic voluptatibus facilis officia magnam veniam dolore. Possimus
              illum quam perspiciatis! Deserunt vel dolore esse assumenda,
              asperiores explicabo voluptatibus nisi eum, iste necessitatibus
              ratione eaque pariatur sit odio soluta sapiente sed accusamus
              autem velit voluptate nemo. Repudiandae harum doloremque eligendi,
              ducimus minima, odit tempore reiciendis amet voluptas voluptatibus
              qui soluta, rerum ipsam commodi necessitatibus? Tempora culpa
              pariatur rem consequatur, maiores, fugit recusandae dolores minus,
              eveniet perspiciatis enim facilis corporis porro quo esse vel
              fugiat natus modi delectus error quos. Minima, a beatae.
              Cupiditate consectetur ipsa provident obcaecati delectus soluta
              fugit sit inventore iure reprehenderit voluptatum enim nulla, quos
              sunt repudiandae deserunt, molestias temporibus, dolores odit!
              Cumque aut tempore aliquam culpa recusandae delectus, praesentium
              modi consequatur molestiae expedita enim sequi, qui quae iste
              architecto impedit hic laboriosam in.
            </p>
            <button
              className="m-3 button shadow"
              style={{ backgroundColor: "black" }}
            >
              See Gallery
            </button>
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
            <h1 className="m-3" style={{ padding: "10px" }}>
              Services
            </h1>
            <div className="services">
              <div className="row">
                <div className="col-sm-6 service-img chiro">
                  <Link to="/services">
                    <h2>Plantation Shutters</h2>
                    <span>
                      Learn More <FontAwesomeIcon icon={faChevronCircleRight} />
                    </span>
                  </Link>
                </div>
                <div className="col-sm-6 service-img corrective">
                  <Link to="/services">
                    <h2>Solar Shades</h2>
                    <span>
                      Learn More <FontAwesomeIcon icon={faChevronCircleRight} />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 service-img lifestyle">
                  <Link to="/services">
                    <h2>Horizontal Shades</h2>
                    <span>
                      Learn More <FontAwesomeIcon icon={faChevronCircleRight} />
                    </span>
                  </Link>
                </div>
                <div className="col-sm-6 service-img spinal">
                  <Link to="/services">
                    <h2>Vertical Shades</h2>
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
