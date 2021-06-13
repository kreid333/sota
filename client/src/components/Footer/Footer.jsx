import React from "react"
import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHouzz,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bg">
        <div className="container text-center">
          <h5 className="light-text">SOTA Window Coverings</h5>
          <div className="contact light-text mb-2 mt-2">
            <span>4624 Danson Way</span>
            <span>Delray Beach, FL 33445</span>
            <span>
              Phone:{" "}
              <a href="tel:5617054900" style={{ color: "white" }}>
                (561) 705-4900
              </a>
            </span>
          </div>
          <div style={{margin: "10px 0px"}}>
            <a href="https://www.houzz.com/professionals/window-treatments/sota-window-coverings-pfvwus-pf~1762534943" className="footerIcon" target="_blank">
              <FontAwesomeIcon icon={faHouzz} size="2x" />
            </a>
            <a href="https://www.facebook.com/SOTA-Window-Coverings-162212467184332/" className="footerIcon" target="_blank">
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
                style={{ margin: "0px 20px" }}
              />
            </a>
            <a href="https://instagram.com/sota_window_coverings" className="footerIcon" target="_blank">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
          <small>&copy;2021, SOTA Window Coverings</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer
