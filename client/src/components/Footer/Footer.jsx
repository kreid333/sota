import React from "react"
import "./Footer.css"

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
              Phone: <a href="tel:5617054900" style={{color: "white"}}>(561) 705-4900</a>
            </span>
          </div>
          <small>&copy;2021, Kai Reid</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer
