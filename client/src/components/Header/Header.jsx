import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"
import { Helmet } from "react-helmet"
import "./Header.css"

const Header = ({ pageTitle }) => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="SOTA Window Coverings Delray Beach Florida"
        ></meta>
        <title>{pageTitle}</title>
      </Helmet>
      <Navbar
        collapseOnSelect
        expand="xl"
        fixed="top"
        className="shadow-sm navigation"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-nav mx-auto">
            <Link to="/" className="nav-link mr-5">
              Home
            </Link>
            <Link to="/about" className="nav-link mr-5">
              About
            </Link>
            {/* <Link to="/faq" className="nav-link mr-5">
              FAQ
            </Link> */}
            <Link to="/testimonials" className="nav-link mr-5">
              Testimonials
            </Link>
            <Link to="/gallery" className="nav-link mr-5">
              Gallery
            </Link>
            <Link to="/projects" className="nav-link mr-5">
              Projects
            </Link>
            <Link to="/contact" className="nav-link mr-5">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
