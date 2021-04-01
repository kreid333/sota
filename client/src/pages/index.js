import React from "react"
import Layout from "../components/Layout"
import { Carousel } from "react-bootstrap"
import IMG1 from "../images/IMG_5117.jpg"
import IMG2 from "../images/IMG_5119.jpg"
import IMG3 from "../images/IMG_5120.jpg"
import SOTA from "../images/SOTA.png"
import "./styles/index.css"

export default function Home() {
  return (
    <Layout title="Home">
      <div className="row hero m-0">
        <div className="col-lg-3 p-0">
          <div className="background d-flex">
            <img className="align-self-center mx-auto pt-3 pb-3" src={SOTA} />
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
    </Layout>
  )
}
