import React from "react"
import Header from "./Header/Header"
import "bootstrap/dist/css/bootstrap.min.css"
import "@fontsource/montserrat"
import "../styles/global.css"

const Layout = ({ children, title }) => {
  return (
    <>
      <Header pageTitle={title} />
      <div className="wrapper">{children}</div>
    </>
  )
}

export default Layout
