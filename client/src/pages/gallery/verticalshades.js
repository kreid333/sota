import { Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import VerticalShades from "../../components/VerticalShades/VerticalShades"

const verticalshades = () => {
  return (
    <Layout title="Vertical Shades">
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h1 className="m-3" style={{ padding: "20px" }}>
              Vertical Shades
            </h1>
          </div>
        </div>
        <VerticalShades />
        <Link to="/gallery">
          <button type="submit" className="globalBtn m-5">
            Go back
          </button>
        </Link>
      </div>
    </Layout>
  )
}

export default verticalshades
